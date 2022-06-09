Combining domain warping and modified noise functions can produce extremely detailed and varied alien-like textures and shapes. This post is a peek into how I've been using these techniques to create pieces of generative art.

---

In this post, I will shed light on my general process, and showcase some of the pieces I've created. Domain warping and modified noise have been prominent tools of mine for a long while now, and I've developed a little experimental library with loads of components that I routinely use in my generative works. Most of these components can be found in [this](https://github.com/palmdrop/sandbox) repository. The repository, however, is mostly my generative playground and might not e that easy to navigate. I wish you all the luck. I'll try to link to the appropriate files and packages whenever possible.

Before moving on, please read [my post about domain warping](/nodes/domain-warping) and [my post about modified noise](/nodes/modified-noise). This post heavily builds on the techniques described there.

Below are a few sample images, produced using the process I will describe:

![Example 1](/img/posts/alien-patterns/valleys4.jpg)

![Example 2](/img/posts/alien-patterns/neon5.jpg)

![Example 3](/img/posts/alien-patterns/brain5.jpg)

More samples can be found in the [repository](https://github.com/palmdrop/sandbox/tree/main/output) or on [my instagram](https://www.instagram.com/palmdrop/).

In this post, I'll cover the following topics:

* General process
* Texture pieces
* Alien shapes
* Adding color

"General process" will detail the steps I go through when creating images like those above. "Texture pieces" will describe a few specific designs, that I call "patterns". "Alien shapes" will introduce warped shapes which can be used to mask certain parts of the texture. Finally, I'll briefly discuss one method for adding color.

In the pseudo-code for this post, I'll be using a set of functions that are based on my previous posts. In those posts, I mostly dealt with noise functions, however, in this post I will abstract this to any function which takes a two-dimensional point as input and returns a floating-point value between 0.0 and 1.0. Such a function could be referred to as a "heightmap". 

These are the function's I'll be using:

```javascript
pow(heightmap, exponent)
```

See "Powered noise" in [my previous post](/nodes/modified-noise).

```javascript
add(heightmap1, heightmap2)
```

and

```javascript
mult(heightmap1, heightmap2)
```

See "Noise combinations".

```javascript
ridge(heightmap, threshold)
```

See "Ridged noise".

```javascript
fractal(
  heightmapList, 
  frequency, 
  lacunarity, 
  persistance
)
```

See "Fractal noise".
    
```javascript
dynamicFractal(
  heightmapList, 
  frequency, 
  lacunarity, 
  persistence, 
  scalingHeightmap
)
```

I will also assume the existence of a function

```javascript
getNoise()
```

which returns a new noise function (with a unique seed) every time it's called. In all examples, this noise will be simplex noise.

I will also be using a `warp` function which uses the `domainWarp` function from [my post about domain warping](https://palmdrop.site/blog/my-take-on-domain-warping). This function will take a heightmap, warp its domain, and return the new, warped heightmap.

```javascript
warp(source, angleFunction, distFunction, maxDist)
    return (p) => 
        source(domainWarp(
          p, 
          angleFunction, 
          distFunction, 
          maxDist
        ))
```

## General process
The goal of my process is often to achieve a high degree of complexity and variation. To do this, it's vital to create a sufficiently interesting `base pattern`, or `base`. This is what the entire texture will build on.

The `base` is created using a combination of noise functions, domain-warped noise, and/or [fractal noise](https://github.com/palmdrop/sandbox/blob/main/src/sampling/heightMap/modified/FractalHeightMap.java) (sometimes ["dynamic fractal noise"](https://github.com/palmdrop/sandbox/blob/main/src/sampling/heightMap/modified/DynamicFractalHeightMap.java)). 

Sometimes, the `base` is warped further using another noise function, a set of shapes, and so on. The result of this is the `texture`. The `texture` and the `base` are sometimes the same. Do not think about that too much.

Afterward, recursive domain warping is applied to the `texture`. Often, the `texture` is used to warp itself for 1 to 3 iterations. There are endless variations on how this can be done.

The result of this often produces an interesting black-and-white texture. Color will be discussed in the final part of this post.

All of this will hopefully become more clear when I get into the next section.

## Texture Pieces
For the sake of example, and because it tends to produce interesting pieces, the textures I'll go all feature prominent use of ridged noise. Let's start with the "Fabric texture".

### Fabric Pattern
![Fabric pattern](/img/posts/alien-patterns/surface2.jpg)

Although not exactly like fabric, this pattern tears in an organic way when zoomed in. This is how it's made:

The `base` is fractal noise based on powered ridged noise. This can be created using a function that returns a new modified noise function each time you call it, like this:

```javascript
RN = () => 
    R = ridge(getNoise(), 0.3)
    return pow(R, 0.2)
```

This produces ridged noise with amplified ridges. Use the function to create a list `LN` with nine elements of powered ridged noise. These elements can then be combined using the `fractal` function described above:

```javascript
base = fractal(LN, 0.005, 1.8, 0.5)
```

This is the result:

![Fabric pattern base](/img/posts/alien-patterns/fabric-base.jpg)

Next, recursive domain warping is applied. Each iteration, the domain warp is applied to the `base`, and the result is stored in the `texture` variable. The `iterations` variable controls the number of iterations. This is my implementation:

```javascript
recursiveWarp(base, iterations)
    texture = base

    for(i in [0, ...(iterations - 1)])
        texture = warp(base, texture, texture, 50)

    return texture
```

`texture` is drawn to the screen. This is done by translating each pixel to a two-dimensional point, which is used as input to `texture`. The return value, a value between 0.0 and 1.0, is then translated to a greyscale color. 

This is one iteration:

![Fabric one iteration](/img/posts/alien-patterns/fabric-one-iteration.jpg)

And this is two iterations, with increased warp amount (maxDist):

![Fabric two iterations](/img/posts/alien-patterns/fabric-two-iterations.jpg)


The banner image of this section uses three iterations. Of course, there are endless variations to this. If you want to see my implementation, [here's a link](https://github.com/palmdrop/sandbox/blob/main/src/sampling/patterns/FabricSurfacePattern.java). 

### Navel Pattern
![Navel pattern](/img/posts/alien-patterns/valleys1.jpg)

The implementation of this pattern is quite similar to the previous one. It's also based on a list of ridge noise functions, `LN`, created using the function `RN`, described previously. However, we also create a scaling heightmap called `controller` using `RN`, i.e 

```javascript
controller = RN()
```

Then, a dynamic fractal heightmap is created (instead of a regular fractal one):

```javascript
base = dynamicFractal(LN, 0.005, 1.8, 0.5, controller)
```

The `controller` varies the persistence of each octave. The resulting `base` looks like this:

![Navel base](/img/posts/alien-patterns/navel-base.jpg)

Then, the domain is warped recursively in the same way as the previous pattern:

```javascript
texture = recursiveWarp(base, iterations)
```

This is one iteration:

![Navel one iteration](/img/posts/alien-patterns/navel-one-iteration.jpg)

And this is a variation with higher frequency and two iterations: 

![Navel two iterations](/img/posts/alien-patterns/navel-two-iterations.jpg)

Once again, the banner image for this section used three iterations. Three iterations seem to be the sweet spot. A great deal of detail is achieved while preserving structure. 

This pattern has an interesting variation. By "inverting" the return value of the `controller`, we get more detail at the thin black lines instead of the brighter areas.

```javascript
controller = (p) =>
    N = RN()
    return 1 - N(p)
```

Using this setup, I created this piece:

![Inverted navel piece](/img/posts/alien-patterns/valleys3.jpg)

The code for the navel pattern can be found [here](https://github.com/palmdrop/sandbox/blob/main/src/sampling/patterns/NavelFabricPattern.java), and the variation described above can be found [here](https://github.com/palmdrop/sandbox/blob/main/src/sampling/patterns/WakePattern.java).

### Spire pattern
![Spire pattern](/img/posts/alien-patterns/neon2.jpg)

Again, this pattern builds on the previous one. I do love ridged fractal noise, it provides the perfect foundation for highly varied patterns. In the piece above, I added color using the technique which will be discussed in the last section of this post.

Once more, `RN` is used to create a `controller` and a list of eight modified ridged noise functions. These are then combined to create the `base`, like so:

```javascript
base = dynamicFractal(LN, 0.003, 2.0, 1.0, controller)
```

The slightly altered frequency, lacunarity, and persistence create this:

![Spire base](/img/posts/alien-patterns/spire-base.jpg)

This `base` has a lot more fine detail than the previous ones, and the amount of detail varies a lot in different areas. This gives the resulting pattern a great variety of texture characteristics. 

Like before, the next step is domain warping. For this pattern, one iteration is usually enough, since we already have a lot of detail. I apply the domain warping slightly differently, which is what gives this pattern a different character than the navel pattern. Instead of letting `texture` control both the rotation and the amount, only the rotation is varied, while the amount is constant. 

```javascript
texture = warp(base, base, (p) => 1.0, 100)
```

where `(p) => 1.0` is a function that takes a point and always returns 1.0. 

![Spire one iteration](/img/posts/alien-patterns/spire-one-iteration.jpg)

The fascinating part about this pattern is the long "spires", i.e the long sharp lines. However, the result also has a lot of different textures baked in. Take the banner image of this section. You get strange, smooth bulbs:

![Spire zoom 1](/img/posts/alien-patterns/spire-zoom1.jpg)

You get the curled warp of "typical" domain warping:

![Spire zoom 2](/img/posts/alien-patterns/spire-zoom2.jpg)

And you get these long, sharp spires that spear the overall pattern:

![Spire zoom 3](/img/posts/alien-patterns/spire-zoom3.jpg)

Of course, it's also possible to do multiple iterations of domain warping with this pattern as well, but we might produce a lot of chaos. Just for show, this is the spire pattern with two iterations and an increased amount of warping:

![Spire two iterations](/img/posts/alien-patterns/spire-two-iterations.jpg)

Like the surface of some planet.

***

These were only a few patterns, all using ridged noise. With other noise functions and other ways of modifying noise, there are of course endless variations to this. Some of which I've explored in the past. Many of which I will never find time for.

## Alien shapes
![Circle](/img/posts/alien-patterns/o6.jpg)

Domain warping can also be used to produce interesting shapes, that in turn can be used to confine the patterns described above to a specific area. I'll demonstrate with a simple circle function:

![Circle](/img/posts/alien-patterns/circle.jpg)

Let's use one of the previously described patterns to warp the domain of this circle function. This will produce a distorted shape which can then be used to mask a specific part of a pattern. 

![Warped circle](/img/posts/alien-patterns/warped-circle.jpg)

However, the sharp edges produce an unnatural result. I prefer to use a circle function with faded edges instead. Something like this:

![Faded circle](/img/posts/alien-patterns/faded-circle.jpg)

which produces the following effect when warped using the `base` of the previously describe spire pattern:

![Warped faded circle](/img/posts/alien-patterns/warped-faded-circle.jpg)

This is already quite interesting. However, this can be improved further. Take a `base` pattern and warp the circle shape using it. The warped circle will now blend well together with that base pattern and can be used to confine the final pattern to the area of the shape. 

say we have a base pattern `P`, for example, the base of the spire pattern. We also have a blurred circle function `C`. We now create a warped circle function, `S`:

```javascript
S = domainWarp(C, P, (p) => 1.0, 50)
```

We then combine `S` with our general base pattern `P` to mask this area:
    
```javascript
base = mult(S, P)
```

Using this as `base`, we perform the same process as described under "General process", i.e we distort the base using recursive domain warping. This is a possible result:

![Warped faded circle, two iterations](/img/posts/alien-patterns/warped-faded-circle-two-iterations.jpg)

An alien hairball. Very cool. I used this technique, with some variations, to produce a series of pieces called "digital objects" or just "objects." [This](https://www.instagram.com/p/CF2F_l4HlYu/?utm_source=ig_web_copy_link), [this](https://www.instagram.com/p/CF84oDLnxFb/?utm_source=ig_web_copy_link) and [this](https://www.instagram.com/p/CF9eVrJHlQZ/?utm_source=ig_web_copy_link) are a few examples. 

## Adding color
Most often, I work in [HSV space](https://en.wikipedia.org/wiki/HSL_and_HSV), which means that I have one channel for controlling hue (the color nuance), one channel for controlling saturation (the richness of the color), and one channel for controlling brightness (which should be self-explanatory). 

Imagine having an `HSV` function that takes three floating-point values, one for hue, one for saturation, and one for brightness, and converts them to an RGB value which can be displayed on the screen. We'll use three different functions to vary the value of H, S, and V across space: using `H`, `S` and `V` (functions that take a point and returns a value between 0.0 and 1.0) we create a coloring function `C`:

```javascript
C = (p) => 
    HSV(H(p), S(p), V(p))
```

Often, brightness, or `V`, controls most of the general look of the resulting pattern. `S` can influence the richness of an area, but changes in saturation are not as apparent as changes in brightness. `H` can really affect the character of the piece.

We now want to apply color to a pattern `P`. I often let `V = P`, since this will influence the piece the most. For the sake of simplicity, let `S` be constant: `S = (p) => 1.0`. Now, say we want the hue to be different for different areas of the image. One solution is to let `H` be some low-frequency noise. However, if `H` is not somehow related to `P`, the hue will seem disconnected from the rest of the pattern. And if `H = P`, then the hue will vary in the same way as the brightness, which is not that interesting. 

My solution is this: Say `N` is a low-frequency noise function. Do not use this for `H` directly, but first warp `N` using `P`. For example:

```javascript
H = domainWarp(N, P, (p) => 1.0, 100)
```

Now, the color will vary slowly, but also follow the general shape of the pattern. I used this technique when adding color to the banner image for the Spire pattern, and this piece as well:

![Neon colors](/img/posts/alien-patterns/neon4.jpg)

***

That was all I had to say. Hope this post proves useful. Feel free to scavenge the [repository](https://github.com/palmdrop/sandbox) and steal anything you find useful. Give me credit if you think the code is worth it. 

Stay inside.
