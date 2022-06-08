---
title: 
keywords: genart
date: 2022-01-10
image: 
---

[OLD POST] Domain warping: a procedural method for generating natural-looking patterns and shapes. I've used this technique for a long time, and the results can be beautiful and strangely organic. This post will explore my (slightly different) approach, and some of the images this approached helped produce.

---

The traditional implementation of domain warping is introduced perfectly by Inigo Quilez in [this](https://www.iquilezles.org/www/articles/warp/warp.htm) blog post. Here's my summary:

A domain is the set of all possible input alues for a particular function. When we warp a domain, each input value is mapped to some other input value, before being passed to the function. E.g, we warp the domain of `f(x)` by inserting another function `g(x)` like this: `f(g(x))`. For math heads, this is just function composition, but when this operation is performed in order to deform a 2D or 3D graphical scene or object, the term domain warping is often used instead. It's more descriptive; spatial warping is what we do.

I mostly work in two dimensions. `x` then becomes `p`, a two-dimensional point. `f(p)` is a function that takes a point and returns a floating-point value, and `g(x)` is a function which takes a point and returns a new, transformed point. 

Here's a spiral pattern I made using a sawtooth wave (`f(p)`) and a warping function that rotates each input point around origo (`g(p)`).

![spiral](/img/posts/domain-warping/simple1.jpg)

Possibly hypnotic. If I didn't want you to keep reading I would have made it spin as well. 

Moving on, let's consider my implementation of domain warping. It's not that different from the traditional method, however, I strictly work with polar offsets (an angle and a distance) to transform my points, instead of defining an x and y offset separately. 

As Inigo Quilez describes, we often only want to warp the domain with a small amount. If the point `p` is the non-warped input to a function `f(p)`, we might define our warping function like this: `g(p) = p + h(p)` where `h(p)` returns a small offset. Instead of this, I use two functions `A(p)` and `D(p)` to define an angle and a distance which I use to calculate a polar offset. We get:

```javascript
g(p) = p + [cos(A(p)), sin(A(p))] * D(p)
```

where `[x, y]` is a two-dimensional point.

This allows me to define different functions for `A(p)` and `D(p)`, which often produces interesting results. This method makes the x and y values of the offset fairly coherent across space and gives me a lot of control. It also makes it trivial to vary the strength of the warping effect across space (make sure `D(p)` is a low value for some areas) or control the intensity of the distortions, i.e, how detailed the warp is (by tuning the frequency of `A(p)`). 

When working with this method, I often use simple mathematical functions in combination with noise functions (like Perlin noise). It's helpful to make sure all these functions return values between 0 and 1, to know what we are working with. To get an angle or a distance outside the range of [0,1], just multiply the result of `D(p)` and/or `A(p)`. 

Perhaps all this will be more clear with some pseudo-code:

```javascript
domainWarp(p, angleFunction, distFunction, maxDist) 
    angle = angleFunction(p) * TWO_PI
    distance = distFunction(p) * maxDist

    offset = vec2(cos(angle), sin(angle)) * distance

    return p + offset
```

If `angleFunction` and `distFunction` only return values between 0 and 1, the angle will be between 0 and two times *pi* (radians), and the distance will be between 0 and `maxDist`. Using three different noise functions, `N1`, `N2` and `N3`, let's try this out:

```javascript
N1(domainWarp(p, N2, N3, maxDist))
```

We have now warped the domain of `N1` using polar offsets with a max distance of `maxDist`. 

Here's another image produced with this method. `N1` is a sine function, `N2` is a noise function with a high frequency and `N3` is a noise function with a low frequency.

![Domain warp 1](/img/posts/domain-warping/simple2.jpg)

Some areas are less intense, and in these areas, the sine wave is still apparent, but it's been transformed to a curled and folded string. Here, the waveform remains continuous because the noise functions used are fairly smooth. The curl effect is created thanks to the use of polar offsets. However, when the effect becomes more intense (`D(p)` takes on a higher value), the sine wave is transfigured -- it becomes a mess of alien-like scribbles. The overall effect is quite organic, and to me, a lot more visually engaging than plain noise.

Generally, the best (and most strange) results were achieved when I used a combination of noise and other mathematical functions. In a future post, I'll document some of these combinations. 

But for now, I'd like to mention two personal breakthroughs. First, I realized that you could use a function to warp its own domain. Take noise function `N`, and define a new, warped noise function as follows:

```javascript
NW(p) = N(domainWarp(p, N, N, maxDist))
```

Here, `N` itself determines how much its domain should be warped (both in terms of angle and distance). A feedback effect is achieved, which made me think: why only do this for one iteration? This is the second breakthrough. Why not do this recursively?

So, by going another step we get:

```javascript
NW2(p) = N(domainWarp(p, NW, NW, maxDist))
```

There are endless variations to this. You might want to use `NW` as the noise being warped for the second iteration. You might also not want to keep using `N` as the only noise source: other functions can be introduced and applied in any way you might like. 

Here are a few more images produced with variations of this technique: 

![recursive 2](/img/posts/domain-warping/recursive2.jpg)

Many layers of noise and domain warping are here combined, and color is introduced.

![recursive 3](/img/posts/domain-warping/recursive3.jpg)

I do not even remember what's going on here.

![recursive 1](/img/posts/domain-warping/recursive1.jpg)

And these "glass pearls" are particularly interesting to me. No physics simulations are going on here, no light interactions. The basic pattern is just a sine function combined with some low-frequency Perlin noise. The domain of this pattern is then warped using a grid of fuzzy circles (brighter close to their centers, darker close to the edges). With a few recursions, the sine wave is rotated and scaled multiple times, and hence seem to adopt the shape of the "pearls".

In a future post, I'll describe some more of my results. By introducing fractal noise (sometimes called fractal Brownian motion), ridged noise, and more complex function interactions, I rendered images that looked like photographs of microscopic beings or extraterrestrial terrains. 

More soon.

