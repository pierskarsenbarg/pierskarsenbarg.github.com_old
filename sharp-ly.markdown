---
author: piers
date: '2009-11-12 15:00:07'
layout: page
slug: sharp-ly
status: publish
title: Sharp.ly
wordpress_id: '472'
---

URL: [http://github.com/pierskarsenbarg/sharp.ly](http://github.com/pierskarse
nbarg/sharp.ly) Public clone: [git://github.com/pierskarsenbarg/sharp.ly.git](
git://github.com/pierskarsenbarg/sharp.ly.git) Download: [http://github.com/pi
erskarsenbarg/sharp.ly/archives/master](http://github.com/pierskarsenbarg/shar
p.ly/archives/master)

I wrote this as a wrapper to the current bit.ly API, well, just for a bit of
fun to start off with. Currently it has these methods available:

**Shorten** - this returns the basic link in the form [http://bit.ly/34GbeE](http://bit.ly/34GbeE) (as it would be for this page) **ShortenAsXML** - this returns the XML for the link straight from the bit.ly API **ShortenAsJSON** - this returns the JSON for the link straight from the API **InfoAsXML** - this returns the XML for the info of a particular link **InfoAsJSON** - this returns the JSON for the info of a particular link **StatsAsXML** - this returns the XML for the stats of a particular link **StatsAsJSON** - this returns the JSON for the stats of a particular link  
I plan to add at least two more methods, one to return the Info and one to
return the Stats, both as some kind of string, but I'm not sure how I want to
do that yet.

