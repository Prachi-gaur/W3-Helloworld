/* Clock */

const timeClockOptions = {
  hour: "numeric",
  minute: "numeric"
}

const timeOfDay = () => {
  const currentDay = new Date()
  let clockTime = currentDay.toLocaleTimeString("en-GB", timeClockOptions)
  const timeClock = clockTime

  document.querySelector("#timeOfDay").innerHTML = timeClock
}

const updateTime = setInterval(timeOfDay, 1000)
timeOfDay(updateTime)

/* Greet User */

const welcomeGreet = () => {
  const currentDate = new Date()
  const amountOfHours = currentDate.getHours()

  const user = "Erik"
  let welcomeMessage = ""

  if (amountOfHours < 12) {
    welcomeMessage = 'Good morning'
  } else if (amountOfHours >= 12 && amountOfHours <= 17) {
    welcomeMessage = 'Good afternoon'
  } else if (amountOfHours >= 17 && amountOfHours <= 24) {
    welcomeMessage = 'Good evening'
  }

  document.querySelector("#GreetUser").innerHTML = `${welcomeMessage}, ${user}.`
}

welcomeGreet(updateTime)

/* Pick Random Quote from Array */

const randomQuote = () => {
  const randomQuoteFromArray = ['"As long as there are sovereign nations possessing great power, war is inevitable." - Albert Einstein', '"The best argument against democracy is a five-minute conversation with the average voter." - Winston Churchill', '"A good plan violently executed now is better than a perfect plan executed next week." - George S. Patton'];
  const randomChoice = randomQuoteFromArray[Math.floor(Math.random() * randomQuoteFromArray.length)];
  
  document.querySelector("#randomQuote").innerHTML = `${randomChoice}`
  }
  
  randomQuote()