# Author
![@jchurst](https://avatars0.githubusercontent.com/jchurst?&s=128)

Created by JC Hurst

[Github](https://github.com/jchurst) | [FreeCodeCamp](http://www.freecodecamp.com/jchurst) | [CodePen](http://codepen.io/jchurst/) | [LinkedIn](https://www.linkedin.com/in/jchurst) | [Webite](http://hurstcreative.com/) | [E-Mail](mailto:jchurstmail@gmail.com)

# FreeCodeCamp API - Image Search Abstraction Layer

## User stories:

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:

```text
http://silver-bandana.glitch.me/api/imagesearch/cats%20funny?offset=10

http://silver-bandana.glitch.me/api/latest/imagesearch/
```

## Example query output:

```text	
0	
url	"https://i.ytimg.com/vi/1demxrg1pXE/hqdefault.jpg"
snippet	"Very FUNNY CATS - Super HARD TRY NOT TO LAUGH challenge - YouTube"
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNvnXogsM1ifL0Ux7HP4w-qUfHcnRCmFJ29rUwf8Iqc9rOhVI1etuT7Hd"
context	"https://www.youtube.com/watch?v=1demxrg1pXE"
1	
url	"https://i.pinimg.com/736x/b7/27/31/b727310683b7c6476cfba6d1c94006eb--funny-animal-pictures-funny-cats.jpg"
snippet	"Best 25+ Funny cats ideas on Pinterest | Crazy cats, Funny cat ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuO9Db4GnBXejJuCfWSI3gz6i-QNy-7xRIvemdfo_uzvYk6MXkr5w1P2E"
context	"https://www.pinterest.com/explore/funny-cats/"
2	
url	"https://i.ytimg.com/vi/5dsGWM5XGdg/hqdefault.jpg"
snippet	"Cats are so funny you will die laughing - Funny cat compilation ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPuVsEcevllrBlGVKWPTW2Xn3PDbWM6h0nREACIuHtnRXaMp9at09zPTT"
context	"https://www.youtube.com/watch?v=5dsGWM5XGdg"
3	
url	"http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"
snippet	"26 Funny Cat Pictures Taken At The Right Time | Top13"
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VZA2quClnAVycY_BNPh8URylWdaEmiv0aZnF89Ow_pFCkY0dWEcuAj4"
context	"http://www.top13.net/perfectly-timed-cat-pictures/"
4	
url	"https://i.ytimg.com/vi/f-e9hSUSlSM/maxresdefault.jpg"
snippet	"Funny Cats And Dogs Part 6 - Funny Cats vs Dogs - Funny Animals ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJvv9bjGcrVWSkuFnQ7YWmKzbRQJPKuSRI1FIwcPMShiF1ncAP3OHGKjf"
context	"https://www.youtube.com/watch?v=f-e9hSUSlSM"
5	
url	"http://mojly.com/wp-content/uploads/2017/10/funny-lol-cats-pics-images-funny-cat-tweets-1311__700.jpg"
snippet	"funny-lol-cats-pics-images-funny-cat-tweets-1311__700 - Mojly"
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Dr8Mgx68MG9ntHaaMlv-G2z9_dhI_5V1sX5VBxyY0TGCrv3kkuvcEWFb"
context	"http://mojly.com/44-photos-of-funny-cats-4548/funny-lol-cats-pics-images-funny-cat-tweets-1311__700/"
6	
url	"https://i.ytimg.com/vi/ZGl8vrceu1E/hqdefault.jpg"
snippet	"Funny CATS guaranteed to make you laugh - Funny cat compilation ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY6LdELqpI1fn4B5nQkz7jmrbMhwAxzRCnXt3XbrNZpBZ9TReuJv3-3WD"
context	"https://www.youtube.com/watch?v=ZGl8vrceu1E"
7	
url	"https://s-media-cache-ak0.pinimg.com/originals/45/fe/3f/45fe3f8d47e14f894a96cf44438314d7.jpg"
snippet	"8 Cute and Fluffy Animals for Today | Fluffy animals, Animal memes ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5-R-SVji7GmTt_Fah4rpYlMtK5F2UMI4_HjMnZgSiKYLiHI-vtjB3VU"
context	"https://www.pinterest.com/pin/393713192405620572/"
8	
url	"https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg"
snippet	"FUNNY VIDEOS: Funny Cats - Funny Animals - Cat Funny Videos ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQEWLmrA9TSJQqT_ijcEYF-6Wv1TTX_YpTYHz6aheEl2J2upHNFRV5H9H"
context	"https://www.youtube.com/watch?v=prALrHUJ8Ns"
9	
url	"https://i.pinimg.com/736x/b6/00/4b/b6004be9c6d96b1f907c6ff075e626df--adorable-animals-funny-animals.jpg"
snippet	"Best 25+ Funny pictures of cats ideas on Pinterest | Funny cats ..."
thumbnail	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURvFFN5M6hmFUa3C_5REbLzPbal7aov7HT-7wKILzHQmSqqLlPmOYUY0X"
context	"https://www.pinterest.com/explore/funny-pictures-of-cats/"
```

## Live app:

https://silver-bandana.glitch.me/
