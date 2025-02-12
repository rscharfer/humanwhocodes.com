---
title: The care and feeding of software engineers (or, why engineers are grumpy)
author: Nicholas C. Zakas
permalink: /blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/
categories:
  - Professional
  - Rants
tags:
  - Engineers
  - Software
---
Not too long ago, Jenna Bilotta wrote an excellent article called, <cite>How designers and engineers can play nice</cite><sup>[1]</sup>, in which she talks about ways for designers and engineers to work more productively. Having faced similar challenges working with designers (and also working with engineers, when I was on the UI side), I appreciate the pragmatic approach she suggests. It always helps to respect the other role's process and understand their thinking when working together.

One of her points for engineers was not to say &#8220;no&#8221; so quickly. That one stuck with me for a while and swam around in my head. My first reaction was, &#8220;but you don't understand why we say no!&#8221; And a million other defensive thoughts soon joined in the party. She is right, of course. We do say &#8220;no&#8221; very quickly, not just to designs, but to everything. That led me into thinking about the psychology of software engineers and what makes us the way we are. 

## Our reputation

Cards on the table, software engineers generally have a reputation for being arrogant, disagreeable, and moody. We also have a reputation for saying &#8220;no&#8221;, for debating pedantic details, and thinking we know how to do everyone's job better than they can. In general, this reputation is deserved. That's exactly what we do, day in, day out, as we intermix writing code with checking in on Twitter and Hacker News.

(Side note: There are some who will say that's not true of all engineers, and you're right. There is a small subset of engineers for which some or all of these are untrue. Before scrolling to the bottom and leaving comments telling me how dumb this article is, please keep reading.)

Reputations aren't randomly given out, they are earned based on experience. What makes the reputation disturbing to me is that I know many software engineers personally, and they are generally a fun-loving, agreeable (if not opinionated), and entertaining bunch. They're the ones you want to hang out with after work and catch up with on the weekend. So why is it that in the presence of work, a different personality shows up?

## Creators, not builders

I have a theory. That theory is that software engineers see themselves very differently than those with whom they work. I've come to this conclusion after over a decade in the software industry working at companies large and small. Companies (product managers, designers, other managers) tend to look at software engineers as builders. It's the job of the product manager to dream up what to build, the job of the designer to make it aesthetically pleasing, and the job of the engineer to build what they came up with. Basically, engineers are looked at as the short-order cooks of the industry.

This is something that my very first manager warned me about. When the first company I worked at went under, he and I had a very frank discussion about my career. While we didn't always get along, he gave me this excellent piece of advice (paraphrasing): 

> Nicholas, you're worth more than your code. Whatever your next gig is, make sure that you're not a short-order cook. Don't accept a job where you're told exactly what to build and how to build it. You need to work somewhere that appreciates your insights into the product as well as your ability to build it.

He was absolutely correct. There are a lot of companies that want short-order cooks, they want implementers and builders to march to a specific beat and stay in line. In fact, I'd say most companies want that, large and small. I can't tell you how many startups contact me offering equity in exchange for building the founder's vision. The implication: we already have all of this figured out, we just need someone to build it.

And here's the real crux of the problem: software engineers aren't builders. Software engineers are creators. Building is what you do when you buy a piece of furniture from Ikea and get it home. The instructions are laid out and if you go step by step, you'll get that comically small table you wanted. Creating is a different process, it's birthing something without direction or instruction. It's starting with a blank canvas and painting a masterpiece. Software engineers don't get into coding because they want someone to tell them what to do, they get into it because they discovered they could create something useful. Every single software engineer fell in love with coding because she made a small, useful program early on and was hooked.

In the triumvirate of software, product managers, designers, and software engineers, only the engineers are expected to turn off their creative minds and just produce. Software engineers aren't dumb, they see this happening, and resentment starts to build (no pun intended). The engineers want to be part of that creative process and are denied. Thus you end up with the typical software engineer personality accented by grumpiness.

## Wait, what's the problem?

Product managers are interesting people. Their ideas and capacity for understanding markets are impressive. They also have a tendency to believe that their ideas are fully-formed when, in fact, there are holes so large that trains could fit through. I say this with love, as several good friends are product managers, and you all know I've said this to your face at one time or another. This is absolutely not a criticism of product managers, it's just in their nature. Their job is a creative one, and ideas do not emerge fully-formed. And that's part of what makes software engineers grumpy.

Both engineers and product managers tend to think, incorrectly, that product specifications or requirements are equivalent to the furniture manual from Ikea. In reality, these documents rarely contain enough information to build an actual thing. They're usually just the starting point. And that presents a unique problem to the engineer.

To understand the problem, consider the job of building a house. Someone has decided they want to build a house on a specific plot of land. The house is to be two stories and have a garage. There's even a rough sketch of the front of the house scribbled down on a napkin. That person comes to you with this information and the napkin and says, &#8220;this is enough for you to start building, right?&#8221; Are you able to start building?

Logically, you can't start building the house at that point. You don't know the square footage. You don't have floor plans. You don't know what sort of codes the city requires for new houses. There's literally not enough information for you to even start digging up dirt. At this point, you'd tell your customer that they are crazy and need to figure out exactly what they want. Now imagine you can't do that, because there's a deadline that someone set and you're responsible for meeting.

&#8220;Well,&#8221; your customer tells you, &#8220;why don't you just start building, and I'll get you the details as they become available. That way, we're not wasting any time.&#8221; 

You know that there's not enough information for you to start building, and further questioning the customer won't yield any additional information right now. Yet, you have a deadline to meet and so you really can't afford to sit around and wait for more information. What do you do? You start making assumptions.

The old adage, &#8220;when you assume, you make an ass of u and me,&#8221; is about as true as can be. Assumptions are dangerous and often wrong. Yet without making some assumptions, the project can't move forward. So that's what you do. You start by assuming that what you already know is true, the house will have two floors and a garage. The garage, should it be attached or detached? How big should it be? Well, let's keep things simple and say it's detached and houses a single car. That means you can start on the garage as a standalone structure on the side and then, when there are more details about the house, you can continue right next to the garage. 

After a week of working on the garage, your customer emerges with more details. In fact, the house has to be three floors (phew, good thing you didn't start there) and will have eight bathrooms. There's no further information about the garage, but the house is going to be painted blue. You then logically assume that the detached garage should also be painted blue and so that's where you spend time next.

A few days later, the garage is almost done. You feel pretty happy about the quality because you went on so little information. You're now ready to start on the house when your customer comes back with more details. The garage actually needs to fit two cars and should not be detached. Your heart sinks, since you had created something nice and now it needs to be bulldozed to make way for the &#8220;real&#8221; thing. What's worse, you now have less time to complete the entire project, which only increases the grumpiness level.

If this analogy seems crazy to you, you've probably never worked as a software engineer. This is our reality every single day. We try to keep projects moving by using our creative facilities only to find that we, in fact, can't read anyone's mind and therefore guess incorrectly as to what exactly it is that we're building. And yet, if we don't do that, we would sit there idle, as no one likes the waterfall process of software development. 

In almost every other industry where things are built, it is expected that all requirements and details are agreed upon and finalized before building commences. Except in software. In software there's &#8220;not enough time&#8221; to gather all the requirements ahead of time. The importance of moving quickly is hammered into us from day one. And so engineers learn to fill in the gaps left by product managers just to keep the project going. Product managers, of course, also have the reputation for changing their minds frequently, which means engineers assumptions are often invalidated partway through the process.

Is it any wonder that software engineers tend to burn out quickly and change jobs frequently?

## Number one priorities

The enemy of any creator is context switching. Once you get into a deeply creative mode, &#8220;the flow&#8221; as some call it, being disturbed to shift focus to something else completely interrupts the process. Yes, writing code is a creative process. It's both logical and creative at the same time. We aren't simply writing code, we are crafting it.

There seems to be a thought amongst people who manage engineers' time that it's easy to shift from one task to the next. After all, as some people have told me, effort is effort. You just direct it where it needs to go like a cannon and fire. Of course, that's not at all true. If you spend a lot of time on one task and then are asked to drop it to work on something else, you can't very easily go back to the first task and pick up where you left off. There is a re-acclimation period once you return to make sure you understand all of the context, this is the cost of context switching. Even if the new task takes only a few minutes to complete, it's enough to interrupt the flow and therefore make an engineer less productive. 

This is one of the top things that make engineers grumpy: constantly shifting priorities. If something is a number one priority on one day and something else is a number one priority on the next day, that means inevitable context switches must occur. Creative types don't like being interrupted until they're finished, which is why engineers are happy to continue coding until the wee hours of the morning just to complete what they've been working on. Interrupting the flow makes us less productive.

True priorities aren't transient, they are static. The frequency with which people above us change their minds is incredibly frustrating for software engineers. We frequently stand ready to march into battle and just want a direction to march in. But if you tell us one day that we're building a house and the next day that we're building a car, you should expect some dissension in the ranks.

## The engineer flaw

Software engineers are put into a difficult position every day, but we are not victims even though those of us who are more melodramatic tend to act that way. Part of our grumpiness actually comes from within, with something that for some reason is deeply ingrained in the majority of software engineers. We have a tragic flaw and that flaw is that we overestimate our knowledge and abilities.

This flaw presents itself in a number of ways. The most frequent is in time estimates. Almost every engineer I know chronically underestimates how long it will take to complete a task or series of tasks. Only the very best are able to give and meet accurate time estimates while the rest are sometimes off by a factor of two or more. The problem is that, as creative people, software engineers fail to anticipate the problems they will encounter.

Even though many engineers will complain that product managers change their minds, almost none will account for that in their time estimates. No time is put in for meetings to go over requirements and make changes. Bugs? Our code is perfect and never has bugs, so we don't need to worry about that (after all, QA will catch anything we somehow missed, right?). Some of the other engineers who we rely on will be out? That's okay, someone else will pick up the slack.

All of those add up to missed deadlines very quickly, but none do as much harm as the number one reason things don't get completed on time: not factoring in time for learning. This goes directly back to our flaw. We think we already know how to complete the tasks we're given yet very frequently they are things we've never done before. The time estimates reflect a state of perfect knowledge, where you have the Ikea manual and plow forward. In reality, many tasks are asking us to do things we've not done before.

Engineers who studied computer science in college are given a false sense of security in their classes. They come out thinking they understand software and the software development process when, in fact, they know next to nothing. I was absolutely that arrogant college graduate at my first job, telling everyone they were doing it wrong. Only years later did I figure out I knew nothing. 

Computer science programs aren't about preparing you for the tasks you'll face in industry. They're about giving you conceptual knowledge of a wide range of topics so that you're not blindsided when you find them in your work. You learn about variables, functions, and objects, because those are things you'll encounter all the time. You learn about databases and queries though the normal forms you learn are practically useless. You spend an inordinate amount of time on sorting algorithms and data structures, all of which are abstracted away from you when writing code professionally. In short, computer science programs review solutions to problems that you'll never need to solve on your own when coding professionally. If I need to sort something these days, I call the `sort()` method. If I need a queue or a linked list, I use the implementation that's native to the language I'm using. These are all solved problems.

So we come out of college thinking we know how to do everything when in fact we only know how to do what has already been done. And to that end, we know a very small amount of what has already been done. Yet we act like we know it all, and assuming perfect knowledge, give estimates that are way too short because we don't take into account time for learning.

Part of the problem is also our fragile egos. We get afraid that if we give an estimate that is &#8220;too long&#8221;, that people will think less of us. &#8220;Good engineers&#8221; should be able to work faster, they say, and so we acquiesce. I've always been amazed when an initial estimate is given on a project and a non-engineer comes back and says that it's too long. First off, as I already mentioned, it's probably actually too short due to our flaw. Second, how can a non-engineer know how long something will take to be built? And that leads to another issue.

## I used to code

There are few phrases that anger software engineers more than, &#8220;I used to code.&#8221; Whether it comes from a product manager, designer, or upper management, using this phrase in addition to a rationalization about why an engineer is wrong leads to nothing but disdain. If I were to ask LeBron James how much time he needs to prepare for a game, I'm sure he'd be amused if I disagreed because I played basketball in high school. Software engineers get the equivalent all the time. 

Here are some common fallacies uttered by non-engineers in my presence:

  * I don't understand why this is such a big deal. Isn't it just a few lines of code? (Technically, everything is a few lines of code. That doesn't make it easy or simple.)
  * {insert name here} says it can be done in a couple of days. (That's because {insert name here} already has perfect knowledge of the solution. I don't, I need to learn it first.)
  * What can we do to make this go faster? Do you need more engineers? (Throwing more engineers at a problem frequently makes it worse. The only way to get something built faster is to build a smaller thing.)

The worst thing you can do for engineers is tell them you used to code. Note that this is very different from actually having been a professional software engineer. An engineer turned product manager has some automatic credibility for a finite number of years after switching jobs (usually around 5, longer than that and everything has completely changed). But those who've never developed software professionally are better served to keep their coding hobby in their back pocket rather than using it as justification for anything in a business.

(To be fair, designers are also subject to this problem. Everyone is a visual design hobbyist because we all like pretty things. That doesn't make everyone qualified to design something.)

## More cooks

Software engineers also constantly face the problem of having too many cooks in the kitchen. Because we are underestimating how long it will take to complete tasks, most software is late. That goes for companies large and small, products that you know and love, they all fall into this category. Being late makes management unhappy, to which they usually decide the problem is too few engineers. We will just hire more engineers, they say, and that will make everything better.

In some cases, adding a few more engineers will work. In most cases, adding more engineers only makes the problem worse. It is hard enough getting creative people to coordinate with each other, it gets more difficult as soon as you start adding more people in. Engineers are not allowed to have idle time as a general rule. If management realizes that engineers are idle they tend to create work for them.

This happened to me in an almost comical way several years ago. We were designing the new Yahoo homepage, rebuilding it from scratch, with just a small group of people. It was actually an ideal situation where the few of us were able to focus on the base architecture upon which the page should be built. We had it all designed and were ready to start prototyping when all of a sudden we were given eight engineers. Our marching orders? Those engineers need to start writing code for the new home page right away. Quite a conundrum because the architecture didn't exist. But the engineers couldn't be idle, they were assigned to the project and needed to start doing something. It's a classic chicken and egg problem.

In an ideal world, we would have built at least a prototype of the architecture and then received additional engineers to help build. In this situation, however, we were stuck. What I ended up doing was to use an existing architecture that we had from another project and create a thin façade that made it appear as if our actual architecture existed. The engineers were able to stop their work and we were able to work on building the actual architecture at the same time. This was a horrible solution to horrible problem and it ended up biting us later on because engineers reached the edges of the façade where new architecture functionality would eventually be but didn't yet exist. I finally had to tell my manager at one point that unless he gave us time to build out the actual architecture the house of cards we had built would come crumbling down.

Having too many engineers on a project is a serious problem. Adding more engineers assumes that there are parallel tasks to be completed, but in reality, the number of parallel tasks on any one project is small and finite. When there are more engineers than can be used, engineering time ends up going away from developing and towards planning, synchronization, and coordination. To go back to my earlier metaphor, you can't build the second floor until the first floor has been built. Many tasks on a software project are actually sequential, so adding more engineers doesn't speed things up. Or as one of my former colleagues used to always say, I don't care how many women you give me, it still takes nine months to make baby.

## Real grumpiness

So, without enough information, changing requirements, not enough knowledge to do the job, and people constantly second guessing us, we trudge into work every day. Being creative people, we put up with all of this because we know that one day people will use our work. That's really what drives software engineers more than anything else: the idea that people we don't even know will be affected by our work. Whether you're working on a web site visited by millions each day or you're working on a point-of-sale system for restaurants, the knowledge that we're affecting people's lives is a powerful driver.

<blockquote class="twitter-tweet">
  <p>
    I can't state this enough: Programmers don't burn out on hard work, they burn out on change-with-the-wind directives and not &#8216;shipping'.
  </p>
  
  <p>
    &mdash; Mark Berry (@markab) <a href="https://twitter.com/markab/status/181452969391292417" data-datetime="2012-03-18T18:52:13+00:00">March 18, 2012</a>
  </p>
</blockquote>



When there are delays due to people changing their minds, we get very grumpy. Insanely grumpy. Our goal of getting our work in front of people has been deferred, and that's demoralizing. Amazingly, software engineers are typically not perfectionists. We are usually okay with getting something good out there rather than getting something great out there. We like building small things to ship quickly and then later combining them into a big thing. Why? Because that's how we get our work out to people.

Now, we all know delays are part of software as much as anything else. Engineers will work like crazy if their time estimate was off to try and make it work. Engineers don't hate hard work or long hours; we hate when it doesn't pay off. 

## What thanks?

As a software engineer, our jobs operate on very different timelines than others. It's typically not a designer or product manager that's woken up in the middle of the night because something is broken in production (though, I have known PMs who wanted to be called when that happened). I was once about to leave my place with a date when the office called because of a production issue. She sat and waited patiently for an hour while I tried frantically to fix the issue before she ultimately took off (I couldn't blame her), leaving me to my work and my coworkers in IRC sharing my misery.

Yet, you'll rarely find software engineers complaining about long hours or being woken up because of a production issue. The software is our baby, and we like to care for it as such. That means if it needs feeding in the middle of the night, we do it. If it needs extra care over the weekend, we do that too, all with a smile because our creation is growing.

Engineers are especially happy when they're able to check in the last bits of code for a task. I've never seen engineers so jovial as when they send out an email saying a task is complete and ready for review. Yet that mood is quickly dashed when in the next ten minutes, bugs start getting filed against their newly-created baby. 

Imagine that for a second, if you will. You've worked for a day or a week or many weeks on something and checked it in. You're proud because you accomplished the task, probably learning to do something you didn't know before. All you really want is to take a moment to sit back and admire your work for a bit. Maybe have someone say, &#8220;good job.&#8221; And what response do we get? Bugs. Something isn't working, something else is out of place, and so on. Our good mood is destroyed as we rush into fixit mode.

## Why we say &#8220;no&#8221;

Given everything I've mentioned, here are the common reasons why engineers say no (or otherwise seem grumpy):

  * The request is coming late during development and there's not enough time to fit in before the deadline.
  * The request invalidates one or more assumptions that were made early on in the process to get the project moving.
  * The request is a reversal of previous requirements.
  * The request otherwise increases the amount of work that has to get done before the deadline.
  * We are so burned out that any request seems like a ton of extra work and we just don't want to deal with it.

Keep in mind all of these except for the last one have to do with the engineer meeting a deadline to get the project out the door. We want the tasks to be completed, and the only way that happens is if the tasks don't change while we're working on them. When they do change, that's when we get really grumpy and that's when the &#8220;no&#8221; comes flying out of our mouths before you even finish your sentence. 

## Care and feeding

So how do you deal with these grumpy necessities to your business? Review for a moment the things that drive engineers:

  * Being creative
  * Solving problems
  * People using our work

Note what's missing from that list. Money. Throwing money at engineers rarely satisfies them. It sounds cliche, but it's really not about the money for engineers. Money allows them to have fun, but what really interests us is coding and creating. When we can do that in a healthy environment, we'll remain happy for a very long time.

So how do you create a healthy environment for engineers?

### Work cross-functionally

Software engineers are creative, just like product managers and designers, and so you should work to include them in the creative process. Engineers are tremendous assets in brainstorming sessions and when reviewing initial designs. Give every engineer the opportunity to meet with the ideation team and work directly with them (not necessarily all at the same time). In short, inject the engineer into the creative process earlier. No engineer likes getting specs and designs thrown over the wall without understanding them.

Engineers are highly logical, so being in these early meetings to understand where requirements come from can go a long way towards avoiding problems down the line. When engineers feel like builders, they question and that slows down the process. When engineers are co-creators, there are fewer questions and therefore fewer delays later in the process. 

What's more, engineers are frequently way ahead in terms of knowledge of what is possible. If you consider front end engineers, we have knowledge about what browsers are capable of long before product managers and designers do. When we share that knowledge, we actually give everyone new ideas for how to build products because of what is possible. Imagine if you were trying to create a photo sharing site and didn't know that you can now drag and drop files from the desktop into the browser to upload?<sup>[2]</sup> How would that affect the product design?

So, invite engineers into the creative process early on. Let them give you feedback and provide information about what is possible. The less it feels like we're being dictated to, the more likely we are to listen and happily go about our jobs. And that only really happens if we feel like we contributed to the creation of this thing.

### Make a creative space

Following along with the theme of software engineers as creators, try to provide ample opportunity for us to be creative. There's a reason why hack days and hack weeks are so popular &#8211; it's because this is the creative outlet that engineers need to refuel and rediscover their love of code. Hack events are a time when engineers can be completely creative, free from the constraints of their normal jobs.

A hack day every quarter is plenty to get people excited. Want to get people more excited? Give the hack day a theme. Give awards for most creative, most likely to be shipped, and so on. The whole point is to the feed the creativity of the software engineers so that when they get back to their regular jobs, they feel refreshed and ready to contribute once again.

Keep in mind that engineers aren't special in this regard. Everyone needs time to be creative. In my experience, however, product managers and designers tend to get that far more frequently. There are offsites for management and design summits for designers, yet engineers tend to get left out. 

By the way, hack events aren't the only way to do this, but they are the best way to get started. You can also light the fire of creativity by sending engineers to conferences so that they can keep their skills up to date. Allow engineers to buy books that contribute to their knowledge on the company's dime. Permit engineers to express their ideas about the projects they're working on. Google famously gives engineers 20% of their time to pursue side projects. All of this can go a long way towards creating a great relationship with your engineers.

### Encourage time off

With the amount of hours and mental exercises we do on a regular basis, engineers need to take breaks. Unfortunately, that's also something we're not very good at scheduling. We get so caught up in the process that we forget to take vacations. For the first five years of my career, I think I took a total of 7 days of vacation. I don't know why, but we're not very good at making time for ourselves to de-stress. And that's a problem.

Engineer burnout is unique because we are used to powering through it. When burnout gets bad enough, we leave, looking for relief. What's more, engineers will probably never tell you that they're approaching that point; we're too proud for that. On my last team, I told the engineers that the first time they felt frustrated, to come and talk to me. I didn't want them to wait until it got so big that the only way they could escape was by leaving. I didn't want them to leave, I wanted them to be happy, and the only way I could help is if I knew they were starting to not be happy.

Encourage engineers to take time off. Your company gives some amount of vacation, so make sure that engineers are encouraged to use those vacation days throughout the year. One every 4-5 months at a minimum. Managers are in a good place to help with this because they know project schedules.

When engineers take breaks at regular intervals, it restores their creative side by taking them out of the rigor of deadlines. Yes, we will likely still do some sort of coding on our time off, but it will be purely our creation, and therefore quite different than what we do at work. That's the important part of getting refreshed and ready for the next battle.

### Let &#8216;em code

As ironic as it may sound, a lot of companies hire software engineers and then don't let them actually code. Instead, their days are filled with useless meetings that inhibit productivity. In general, software engineers are most productive when they can code for at least four hours straight without interruption. 

It's difficult to get into a good flow while coding if you know you have a meeting coming up in an hour or two hours, that's always in the back of your mind while coding. It is amazingly unproductive to code for an hour, stop for an hour, code for an hour, stop for an hour, etc. You can't get into a flow and just as you start, you have to stop. The software engineer brain has to switch into a good mode for coding in that switch takes time.

Make sure that your engineers have, every single day, at least four hours of uninterrupted time to code. That's the key to getting work done faster. It seems fairly logical: if people usually work an eight hour day, at least half of the time should be spent on the main task. I used to find that I was most productive between 1 PM and 5 PM. I knew that if I had that time every day I could easily complete my tasks. When that time started to be interrupted by meetings, I knew I wouldn't get as much done.

Also, take at least one day a week to have no meetings. That includes daily standups. Just let the engineers have that single day to completely manage their time on their own and get everything done. It is absolutely amazing how much can get accomplished when an entire day is free of interruptions. If necessary, allows engineers to work from home to make sure that they're not interrupted. I actually went through a period in my career where my manager required me to work from home at least two days a week because I was getting interrupted so much in the office. The results: I got my work done very quickly.

### Express appreciation

This is something that can be done immediately and is completely effective. I mentioned earlier the frustration of toiling away to finish a task, only to be met with bugs filed against it. We engineers rarely get a chance to sit back and admire our work, let alone get a pat on the back from someone else.

When an engineer completes a task, especially a long one, a quick note to say thanks will go a long way. Even if it's just, &#8220;Hey, thanks for finishing that up. We'll take a look.&#8221; is enough to diffuse the defensiveness that typically occurs as the bugs start flooding in. Feeling appreciated is important to software engineers because most of the feedback we get is negative, in the form of bugs, production issues, and the like. A little bit of positive feedback makes the rest all that much more tolerable.

For bonus points, set up an award that is given each quarter to the engineer that has made the biggest impact, or improved the most, or whatever. The award doesn't even have to be something big and desirable like an iPad (though we'd graciously accept it along with other goodies), it could be a little trophy and an email to the team or division recognizing the effort.

And please be sure when you're thanking people for their hard work on a product not to forget the engineers. I've been in numerous meetings and on numerous projects where people openly praised product teams or designers for their work on a project while never mentioning the engineers whose blood, sweat, and tears made the thing real. Every product is a success or failure because of all three groups, no one group could do it alone. Make sure your company always recognizes the team as a whole and not just one particular part.

## Conclusion

We software engineers are an interesting bunch. There's a definite personality that comes along with us, and we really do want to make the best thing possible. If you stop treating us like short-order cooks and start treating us like part of the creative process, you are likely to get much farther, faster than you would otherwise. The teams on which I've worked have all had varying degrees of friction caused by not understanding the engineers' mindset and what drives them. It's my sincere hope that this article will lead to better communication between engineers and those that they work with. It's really not that hard. We're all just people who want to feel like a part of the solution rather than a worker bee.


  1. [How designers and engineers can play nice (and still run with scissors) by Jenna Bilotta][1]
  2. [Working with files in JavaScript, Part 1: The Basics][2]

## Translations

  * [Russian][3]
  * [French][4]
  * [Chinese][5]

 [1]: https://library.gv.com/how-designers-and-engineers-can-play-nice-and-still-run-with-scissors-8df20e65c2c1
 [2]: https://humanwhocodes.com/blog/2012/05/08/working-with-files-in-javascript-part-1/
 [3]: http://habrahabr.ru/post/146169/
 [4]: http://blog.mandraxe.info/ingenieurs-grincheux.html
 [5]: http://www.cnblogs.com/huntbao/archive/2012/06/30/why-engineers-are-grumpy.html
