Regular gradient noise, such as Perlin and Simplex noise, is extremely useful for procedurally generating textures, flowfields, heightmaps, etc. But a texture or heightmap created using plain noise is rarely that interesting. Often, noise is modified or used in unique, creative ways.

---

Frankly, regular noise is boring. Not very visually pleasing. Repetitive. Not even Ken Perlin used Perlin noise without changing it in various ways. This blog post describes some of the ways I've been altering the noise functions I work with to achieve more interesting results. In my next post, I will document how I've used the techniques from this post and [my previous post](https://palmdrop.site/blog/my-take-on-domain-warping) to create quite interesting generative art pieces. 

These are the techniques I'll cover in this post, roughly in order of increasing enchantment:  

* Stretched noise
* Modulo noise
* Powered noise 
* Noise combinations
* Ridged noise
* Fractal noise (fractal Brownian motion)
* Dynamic fractal noise

> Note: I'm no expert. I will not cover the mathematics of gradient noise. I'm merely documenting my explorations. 

### Setup
In this post, I'll often compare 1D and 2D representations of various noise variations. Like this:

![1D Perlin noise](/img/posts/modified-noise/perlin-comparison.jpg) 

That was Perlin noise. I'd like to note that I mostly use [Simplex noise](https://en.wikipedia.org/wiki/Simplex_noise) instead, to avoid the directional artifacts that emerge when the frequency of Perlin noise is increased. Simplex noise does not suffer from the same artifacts and has some additional benefits (which I will not cover here). 

Below you'll see a comparison of high-frequency Perlin noise vs high-frequency simplex noise. A clear differenc, no? 

![2D perlin noise with high frequency](/img/posts/modified-noise/perlin2D-high.jpg)
![2d simplex noise with high frequency](/img/posts/modified-noise/simplex2D-high.jpg)

Also, unless I say otherwise, assume the output of the noise is in the range of 0.0 to 1.0.

Let's get into some variations. 

## Stretched Noise
Extremely easy to achieve. Could be used as the basis of a wood or carpet texture, with some creativity. This effect is achieved by having different frequency values for the x and y directions (and z, if you're working in three dimensions). This is a type of domain warping.

![stretched simplex noise](/img/posts/modified-noise/simplex2D-stretched.jpg)

Before introducing some simple pseudo-code, let me familiarize you with my syntax. In this post, I'll heavily use lambda expressions. My syntax is the same as the [one used in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), i.e `func = (x,y) => x + y` defines a function `func` which takes two arguments and adds them together.

Moving on.

Suppose we have a noise function `N` which takes a two-dimensional point/vector `p` as its input. To stretch the noise, we'll scale the `x` and `y` components of `p` using two scaling values, `sx` and `sy`.

```javascript
N2 = (p) => N(vec2(p.x * sx, p.y * sy))
```

One issue with this is that you can only scale along the axes, not in an arbitrary direction. This could be solved with some additional vector math, or by rotating the entire domain with some angle. However, I'll not cover that here.

Instead, on to more interesting stuff.

## Modulus noise
Not that groundbreaking. The idea is that we apply a modulus operator to the output of the noise function. With a modulus value of 0.5, the output will effectively "wrap around" if it exceeds 0.5. However, the new output will be in the range of 0.0 to 0.5. Therefore, I always use a modulus value of 1.0 and increase the amplitude of the noise function to get the same effect. E.g, scale with 2.0 and wrap at 1.0, and the result will be equal to a wrap at 0.5, with the exception that the output range remains 0.0 to 1.0.

If we have a noise function `N` and a multiplier `k`, we might then define a new noise function like this:

```javascript
N2 = (p) => mod(N(p) * k, 1.0)
```

An additional benefit with this method is that if `k` is an integer value, the modified noise function will "wrap around" `k` times. Easy to control. 

Here's an example:

![Modded simplex noise](/img/posts/modified-noise/simplex2D-modded.jpg)

Some of you might see the similarity to metaballs. The math is completely different, but the visual result is quite similar. 
    
## Powered noise 
Again, quite simple -- just apply the pow operator to the noise output. As long as the noise is in the range of 0.0 and 1.0, this operation will preserve that range. If `f(x)` is a straight line with an angle of 45 degrees, one can visualize the effect as follows:

![Pow visualization](/img/posts/modified-noise/graphs.jpg)

And these are the same operations applied to noise:

![High powered simplex noise](/img/posts/modified-noise/simplex2D-pow-high.jpg)
![Low powered simplex noise](/img/posts/modified-noise/simplex2D-pow-low.jpg)

Not that fascinating, but useful. You might want to use noise to generate random islands (say, every value above 0.5 is land, the rest is water). A bigger exponent will produce smaller islands, a smaller exponent will produce bigger islands.

Below is some simple pseudo-code using an exponent `k`:

```javascript
N2 = (p) => pow(N(p), k)
```

The more interesting results appear when you understand that `k` doesn't have to be constant -- `k` can be scaled using another noise function. The effect now varies across space.

![Variable powered simplex noise](/img/posts/modified-noise/simplex2D-pow-variable.jpg)

High-frequency noise is used as the base, low-frequency noise as the exponent scaling function. If `k` is our exponent and `S` is the scaling function, we get this pseudo code:

```javascript
N2 = (p) => pow(N(p), k * S(p))
```

Perhaps you could use this to create a set of archipelagos.

## Noise combinations
The result of multiple noise functions can easily be combined using regular binary operators, such as adding, multiplying, subtracting, or dividing (although dividing might cause unpredictable output intervals and division with zero problems). 

One simple way to combine two noise functions is to multiply the results together. This produces something similar to powered noise, but with a less organic feel. Here's low-frequency noise and high-frequency noise combined.

![Combined simplex noise](/img/posts/modified-noise/simplex2D-combined.jpg)

If we have two noise functions `N1` and `N2` they can be combined as follows:

```javascript
N3 = (p) => N1(p) * N2(p)
```

Adding or subtracting could be done as well. When adding multiple noise functions together, while changing the amplitude and frequency, one gets something called fractal noise. More on that later.

## Ridged noise
Ridged noise is often used to create mountainous terrain (especially when combined with fractal noise). One creates ridged noise by "inverting" all noise values that exceeds some threshold. However, we invert around said threshold. Not clear? This means that as soon as the slope reaches a certain point, it's forced to immediately start going down again, which causes a sharp spike. This will become more clear when you read the pseudo-code.

Here's 1D ridged noise, which should communicate the idea: 

![1D ridged simplex noise](/img/posts/modified-noise/simplex1D-ridged.jpg)

While regular noise might be useful for generating smooth hills, this type of noise is more suited for generating mountainous terrain (or generally sharp textures). 

How to calculate a ridged noise value? Say `t` is our threshold and `n` is the value we'd like to apply the operation to. Then, if `n > t` we calculate how much `n` exceeds `t` with, i.e `n - t`. We then subtract this value from the threshold. The resulting expression becomes `t - (n - t)` (which of course could be simplified, but I prefer it this way since it clearly communicates the idea). 

This only works if `t` is no less than 0.5 (for noise functions returning values between 0.0 and 1.0). If `t` is smaller, the operation might return a negative value. My solution to this is to simply invert negative values. This might still cause issues if `t` is even smaller: by negating the result, the new value could once again be greater than `t`. If that case, the operation could be applied continuously until the result is in the range of 0.0 and `t`.

This is my solution in pseudo code, using a noise function `N` and a threshold `t`:

```javascript
N2 = (p) => 
    n = N(p)
    while n > t
          n = t - (n - t)
          if n < 0
            n = -n
    return n / t
```

The last division makes sure the return value is in the range of 0.0 and 1.0. 

However, I recommend constraining `t` to a range of 0.5 to 1.0, to prevent strange visual effects with downwards spikes as well as upwards (unless this is what you want).

Anyway, here's 2D ridged simplex noise. 

![2D ridged simplex noise](/img/posts/modified-noise/simplex2D-ridged-high.jpg)

Ridged noise can also be combined with powered noise, to amplify the "ridges". Here are two examples:

![2D ridged simplex noise](/img/posts/modified-noise/simplex2D-ridged-pow.jpg)
![2D ridged simplex noise](/img/posts/modified-noise/simplex2D-ridged-pow2.jpg)

## Frequency modulation
This is a type of domain warping. Normally, the frequency of a noise function is constant, but here, a second function scales the frequency differently depending on the position. 

Consider a noise function `N` and a scaling function `S`. We get
    
```javascript
N2 = (p) => N(p * S(p))
```

One thing to note about this is that positions far away from origo will be affected more than positions closer to the origo. E.g, if `p` is at a distance of 2.0 from origo, multiplying by 3.0 will translate it to a distance of 6.0 from origo. However, if `p` is at a distance of 10.0 from origo, multiplying with 3.0 will translate to a distance of 30.0. A change of 4.0 versus 20.0 units. The effect is hence more acute farther from origo. 

![2D frequency modulated simplex noise](/img/posts/modified-noise/simplex2D-frequency-mod.jpg)

Frequency modulation is a bit hard to work with since the effect is different depending on the distance from origo. But I've successfully used it in the past, to a limited extent. [This old Instagram post](https://www.instagram.com/p/CApnNi9n0nF/) uses this technique (here, origo is in the center of the image).

## Fractal noise (fractal Brownian motion)
Once again, Inigo Quilez has a great [blog post](https://www.iquilezles.org/www/articles/fbm/fbm.htm) on the subject, which goes into a lot more detail than I will. I recommend reading it.

Just let me summarize: Fractal noise is many layers of noise, or octaves, added together. For each octave, the frequency is typically increased and the amplitude decreased. This way, each subsequent octave has less influence over the overall output but provides more fine detail. 

The "lacunarity" of fractal noise is the frequency multiplier. For each new octave, we multiply the base frequency with this value. The "persistence" is the same thing, but for amplitude. 

Say we have a list of noise functions `LN`, a base frequency of `f`, a lacunarity of `L` and a persistance of `P`, this is how I typically create fractal noise:

```javascript
N2 = (p) =>
    sum = 0.0
    for i in [0... (LN.length - 1)] 
        N = LN[i]
        frequency = f * pow(L, i)
        amplitude = 1.0 * pow(P, i)
        sum += N(p * frequency) * amplitude
    return sum
```

Here, we iterate over the indices of `LN` and retrieve each noise function. Then we calculate the frequency and amplitude of the current octave. E.g, if `L = 2.0`, the first iteration we get `frequency = f * 2.0^0 = f * 1.0`, the second we get `frequency = f * 2.0^1.0 = f * 2.0`, the third we get `frequency = f * 2.0^2 = f * 4.0` and so on. A common value for `L` is 2.0 and a common value for `P` is 0.5. That means that for each iteration, the frequency doubles, and the amplitude is halved. This ensures that the details are increased while the influence over the general shape is reduced. Here are some examples in 1D and 2D:

![1D fractal noise](/img/posts/modified-noise/fractal-noise1D.jpg)
![2D fractal noise](/img/posts/modified-noise/fractal-noise2D.jpg)

The first one already is a lot more mountain-like than regular noise. However, we can combine fractal noise with ridged noise to amplify the effect. Simply use the same method as the one described above, but let `LN` be a list of ridged noise functions. 

![1D ridged fractal noise](/img/posts/modified-noise/ridged-fractal-noise1D.jpg)
![2D ridged fractal noise](/img/posts/modified-noise/ridged-fractal-noise2D.jpg)

The 2D example doesn't look very mountain-like, but when rendered in 3D one can embody the true mountain essence. I once again urge you to read [Inigo Quilez post](https://www.iquilezles.org/www/articles/fbm/fbm.htm).

An additional note: a side effect of combining noise functions in this way is that the return values no longer will be in the range of 0 to 1.0. I often calculate the maximum value possible and divide by this to normalize the results. 

In my next post, I'll go through some exciting results I've achieved when combining fractal noise and domain warping. 

## Dynamic fractal noise
This is a variation on regular fractal noise. Perhaps there is a name for this already. The idea is that the lacunarity and persistence don't have to be the same everywhere. With regular fractal noise, the level of detail is constant, which will make the terrain equally rough in all places. But if we vary the persistence, some areas would be more smooth and others rougher. The lacunarity could also be varied, however, this creates almost the same effect as frequency modulation (essentially, you create layers of frequency-modulated noise).

Let's take the same code as with regular fractal noise, but introduce a scaling noise `S` which will be used to vary the persistence. We get

```javascript
N2 = (p) =>
    sum = 0.0
    for i in [0 ... LN.length] 
        N = LN[i]
        frequency = f * pow(L, i)
        amplitude = 1.0 * pow(P * S(p), i)
        sum += N(p * frequency) * amplitude
    return sum
```

The only difference is the line that calculates the amplitude. One thing worth noting is that the areas with less detail will often have lower general amplitude since the amplitude of all octaves is scaled equally. It's of course also possible to have different scaling functions for different octaves.

Anyway, here's 1D dynamic fractal noise. Note that the lower area is a lot smoother than the peaks. This is also clearly visible in the 2D representation.

![1D dynamic fractal noise](/img/posts/modified-noise/dynamic-fractal-noise1D.jpg)
![2D dynamic fractal noise](/img/posts/modified-noise/dynamic-fractal-noise2D.jpg)

Using all these techniques, combined with domain warping, I've managed to create extremely interesting shapes and textures. I'll make a complete post detailing some of these configurations and the output they produced soon. Until then, here's one of my favorites:

![Bridge](/img/posts/modified-noise/showcase.jpg)

Stay safe.
