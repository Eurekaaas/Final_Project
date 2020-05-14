const swup = new Swup()


swup.on('pageView', ()=>{
  const dropdowns = document.querySelectorAll('#dropdowns')
  // const dropdownsInnerHTML = [...dropdowns].map(item=>item.innerHTML).sort(()=>.5-Math.random())

  const data = [
    {
      h1: '# MeToo',
      p1: 'Me Too',
      p2: 'A movement against sexual harassment and sexual assault of women. The phrase "Me Too" was initially used in this context on social media in 2006, on Myspace, by sexual harassment survivor and activist Tarana Burke.',
      href: 'https://twitter.com/hashtag/metoo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Ehashtag'
    },
    {
      h1: '# BlackLivesMatter',
      p1: 'Black Lives Matter',
      p2: 'An international activist movement, originating in the African-American community, that campaigns against violence and systemic racism towards black people. BLM regularly holds protests speaking out against police killings of black people, and broader issues such as racial profiling, police brutality, and racial inequality in the United States criminal justice system.',
      href: 'https://twitter.com/search?q=%23BlackLivesMatter&src=typeahead_click'
    },
    {
      h1: '# SayHerName',
      p1: 'Say Her Name',
      p2: 'A social movement that seeks to raise awareness for black female victims of police brutality and anti-black violence in the United States. #SayHerName aims to change the public perception that victims of police brutality and anti-Black violence are predominantly male by highlighting the gender-specific ways in which black women are disproportionately affected by fatal acts of racial injustice.',
      href: 'https://twitter.com/search?q=%23SayHerName&src=typed_query'
    },
    {
      h1: ' # AmINext',
      p1: 'Am I Next',
      p2: "In the Fall of 2014, a Canadian Inuit woman named Holly Jarrett created the #AmINext hashtag campaign to raise awareness about the Canadian Government's lack of response to the high rate of violence against Indigenous women. The campaign involves people taking photos of themselves with signs holding ''#AmINext' and posting it to social media. The campaign was meant to encourage a national conversation about the invisibility and vulnerability of the female Indigenous demographic and call attention to the minimal efforts of the Government in investigating the murders and disappearances.",
      href: 'https://twitter.com/search?q=%23AmINext&src=typed_query'
    },
    {
      h1: '# ThisIs2016',
      p1: 'This is 2016',
      p2: 'In October 2016, following an anti-Asian incident in New York City and the subsequent open letter to the victim from Michael Luo, The New York Times released a video entitled "#thisis2016: Asian-Americans Respond". The video featured Asian Americans who had experienced racism. #thisis2016 subsequently emerged as a hashtag to highlight racism Asian Americans faced.',
      href: 'https://twitter.com/search?q=%23ThisIs2016&src=typed_query'
    },
    {
      h1: '# FakeNews',
      p1: 'Fake News',
      p2: 'The hashtag #FakeNews gained major popularity in 2016 when Donald Trump claimed that the negative press coverage he received was due to the spread of false stories. Since the emergence of this hashtag, there has been an increase in policy-related bills and laws regarding the proliferation of inaccurate information globally, which further politicized the issue and raised concerns of impending censorship. The emergence of social media has allowed for "fake news" to spread much quicker than regular news and information, pushing technology companies to take a more active role in detecting and removing "fake news".',
      href: 'https://twitter.com/search?q=%23FakeNews&src=typeahead_click'
    },
    {
      h1: '# WomensMarch',
      p1: "Women's March",
      p2: "On January 21, 2017, an estimated 2.6 million individuals marched around the world in response to the rhetoric of newly-elected President Donald Trump. The march was organized primarily online through Facebook. Now occurring annually, the goal of the Women's March is to raise awareness and advocates for human rights through peaceful protest.",
      href: 'https://twitter.com/search?q=%23WomensMarch&src=typed_query'
    },
    {
      h1: '# WhyIStayed',
      p1: 'Why I Stayed',
      p2: 'A trending hashtag began in November 2014 in defense of domestic abuse victims after a media release of security camera footage that appeared to show NFL player, Ray Rice, punching his then-fiancee, Janay Rice, sparked public conversation on why Janay and other victims of abuse choose to stay in abusive relationships. The hashtag was started by writer and domestic abuse survivor Beverly Gooden via Twitter in an effort to "change the tone of the conversation."',
      href: 'https://twitter.com/search?q=%23WhyIStayed&src=typed_query'
    },
    {
      h1: '# IStandWithAhmed',
      p1: 'I Stand With Ahmed',
      p2: 'In 2015, a teenage student named Ahmed Mohamed was arrested at his high school in Irving, Texas after his teacher mistook his reassembled clock for a bomb. Ultimately, he was not convicted of any crimes, but he was suspended from school. Shortly after his story hit the news, a tech blogger named Anil Dash tweeted a picture of Ahmed being arrested in his NASA T-shirt along with the "#IstandwithAhmed." His tweet went viral and drew accusations of racism and Islamophobia against the school. It sparked an online movement where many individuals, including scientists and engineers, tweeted their support for Ahmed under the same hashtag.',
      href: 'https://twitter.com/search?q=%23IStandWithAhmed&src=typed_query'
    },
    {
      h1: '# NoBanNoWall',
      p1: 'No Ban No Wall',
      p2: "A hashtag and social media campaign created in response to Donald Trump's Muslim ban and 2016 presidential campaign promises to build a physical wall on the US-Mexico border. In 2017, President Donald Trump issued multiple executive orders threatening to break up families and turn away refugees. Saki Barzinji and Imraan Siddiqi started #NoBanNoWall in an effort to rally Muslim, Latino, and other communities to stand up against xenophobic immigration policies. On January 25, 2017, protestors gathered at Washington Square Park and chanted, “No ban; no wall,” which inspired the Twitter hashtag #NoBanNoWall to protest Trump's travel ban.",
      href: 'https://twitter.com/search?q=%23NoBanNoWall&src=typed_query'
    },
    {
      h1: '# ShoutYourAbortion',
      p1: 'Shout Your Abortion',
      p2: 'hashtag and social media campaign used on Twitter that encourages women who have experience with abortion to break the silence surrounding it. The hashtag was created by American writer Lindy West and friends Amelia Bonow and Kimberly Morrison in response to the US House of Representatives efforts to defund Planned Parenthood following the Planned Parenthood 2015 undercover videos controversy.',
      href: 'https://twitter.com/search?q=%23ShoutYourAbortion&src=typed_query'
    },
    {
      h1: '# ILookLikeAnEngineer',
      p1: 'I Look Like an Engineer',
      p2: 'In August 2015, the #ilooklikeanengineer campaign started. The movement was started by Isis Anchalee to promote discussion of gender issues. Anchalee created the hashtag in response to backlash regarding her face being featured in an ad campaign for the company she works for. One year after the creation of #ilooklikeanengineer 250,000 people had used the hashtag.',
      href: 'https://twitter.com/search?q=%23ILookLikeAnEngineer&src=typed_query'
    }
  ]

  const newData = data.sort(()=>{
    return 0.5 - Math.random()
  })

  for(let i=0;i<dropdowns.length;i++){
    dropdowns[i].innerHTML = `
    <h1>${data[i].h1}</h1>
    <div class="dropdownContent">
      <div class="p1">${data[i].p1}</div>
      <div class="p2">${data[i].p2}</div>
      <a href="https://twitter.com/search?q=%23BlackLivesMatter&src=typeahead_click">See more</a>
    </div>
    `
  }

  Array.from(dropdowns).forEach((item, index)=>{

    // item.innerHTML = dropdownsInnerHTML[index]

    const currentDropdown = item
    const currentContent = currentDropdown.querySelector('.dropdownContent')

    currentDropdown.addEventListener('mouseover', ev=>{
      const contentRect = currentContent.getBoundingClientRect()
      const maxWidth = window.innerWidth - 15
      const maxHeight = window.innerHeight - 15

      if(contentRect.bottom > maxHeight && contentRect.right > maxWidth){
        currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px) translateX(${maxWidth-contentRect.right-15}px)`
      }else {
        if(contentRect.bottom > maxHeight){
          currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px)`
        }
        if(contentRect.right > maxWidth){
          currentContent.style.transform = `translateX(${maxWidth-contentRect.right-15}px)`
        }
      }

    })
  })

})
