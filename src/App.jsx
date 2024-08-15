import React, { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("jackie");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleToneChange = (e) => {
    setTone(e.target.value);
  };

  const getMessage = (age, tone) => {
    if (tone === 'batman') {
      if (age >= 0 && age < 10) {
        return "Listen carefully, young one. Your early years are your training ground. Embrace your toys and enjoy your time, but remember, even at this age, discipline is key. Always follow the rules, and stay strong.";
      } else if (age >= 10 && age < 20) {
        return "This is your formative period. Stay focused and vigilant. The world is complex and fraught with challenges. Use your skills wisely, respect your mentors, and prepare yourself for the battles ahead.";
      } else if (age >= 20 && age < 30) {
        return "You're now stepping into the shadows of the real world. Balance is crucial. Work hard, but do not let stress consume you. Find your purpose, stay disciplined, and always remain vigilant against life's adversities.";
      } else if (age >= 30 && age < 40) {
        return "At this stage, the weight of responsibility grows heavier. Stay resolute and focused. Manage your duties with precision, but remember to take time to recharge. The path is demanding, but your strength and resilience will guide you.";
      } else if (age >= 40 && age < 60) {
        return "Your experience is your greatest ally now. Continue to lead with integrity and wisdom. The challenges of life are significant, but your steady hand and unyielding resolve will see you through. Keep your vigilance sharp.";
      } else if (age >= 60 && age < 80) {
        return "You have reached a point of profound wisdom. Use your years of experience to guide and protect. Enjoy the peace you have earned, but remain aware and prepared. Your legacy is one of strength and honor.";
      }
    } else if (tone === 'professor') {
      if (age >= 0 && age < 10) {
        return "Little one, consider this your preliminary phase. Enjoy the simple pleasures—your toys, your snacks. But remember, even at this age, the foundation you build now will be pivotal for your future endeavors.";
      } else if (age >= 10 && age < 20) {
        return "Ah, the teenage years—a time of exploration and experimentation. Approach life strategically. Stay sharp, respect your mentors, and don’t let distractions divert you from your goals. Preparation is the key to success.";
      } else if (age >= 20 && age < 30) {
        return "Welcome to adulthood. Here, precision and strategy are essential. Manage your responsibilities with care, and remember, even amidst chaos, balance is crucial. Strategize your path forward and adapt with elegance.";
      } else if (age >= 30 && age < 40) {
        return "You’re navigating the complexities of middle adulthood. Use your experience to strategize effectively. Balance your ambitions with relaxation, and remember, every challenge is an opportunity for a new strategy.";
      } else if (age >= 40 && age < 60) {
        return "At this stage, your experience is invaluable. Apply your strategic insights to every challenge. Maintain a balanced approach—work smartly, and don’t forget to enjoy the finer things in life. The right strategy ensures success.";
      } else if (age >= 60 && age < 80) {
        return "Now you’re a master strategist, with wisdom that transcends generations. Use your knowledge to guide and inspire. Enjoy your well-earned peace, but always keep your mind sharp and ready for new challenges.";
      }
    } else if (tone === 'jackie') {
      if (age >= 0 && age < 10) {
        return "Ye bawa, chhote hain, chocolate aur toys se khush raho. Sab kuch maza mein, par mummy ke kehne pe veggies bhi kha lo!";
      } else if (age >= 10 && age < 20) {
        return "Arre bawa, school aur friends ke saath masti karo, lekin zyada shararat nahi. Respect karo, warna phir daant sunni padegi!";
      } else if (age >= 20 && age < 30) {
        return "Ye bawa, abi saans le re bawa, avi toh tu nikla hai. Tham ja re, saans le, stress ni lene ka re, tension nhi lene ka, avi toh poori jindagi hai re, kaam kr but enjoy kr re bawa.";
      } else if (age >= 30 && age < 40) {
        return "Arre bawa, ab tu life ke asli maidan mein hai! Thoda aur zyada dheere se chal, par kadam piche mat hatana. Family, career, sab ka pressure hai, lekin chill mar, bawa. Balance banake, enjoy karte huye aage badhne ka, aur yaad rakh, apne liye bhi time nikalne ka, samjha kya?";
      } else if (age >= 40 && age < 60) {
        return "Sun re bawa, ab toh tu zindagi ka veteran ho gaya! Experience ka dabba bhara pada hai tere paas. Ab har decision ka weight hai, par dil se karne ka re, jo bhi kar. Stress mat lene ka, aram se, thoda shant rehne ka, par apna swag lose mat karne ka! Life ke maze lene ka, and health ka dhyaan rakhne ka, bawa.";
      } else if (age >= 60 && age < 80) {
        return "Arey bhidu, ab tu zindagi ke mahal ke sabse upar waale floor pe hai! Zindagi ke har pal ko jeene ka, aur jo bhi kamai hai, uska maza lene ka time hai. Bachon ko samjhane ka, unke saath masti karne ka, aur apne aapko thoda relax karne ka, re. Ab bas chill mode mein rehne ka, par dil se hamesha bindaas rehne ka!";
      }
    } else if (tone === 'jessie') {
      if (age >= 0 && age < 10) {
        return "Yo, little dude, just play with your toys and drink your milk, bitches! Don’t let anyone mess with you. Eat your damn veggies and keep it chill, alright?";
      } else if (age >= 10 && age < 20) {
        return "Listen up, you little punk. Don’t get too lost in the internet or act like a dumbass. Show up, do your thing, and don’t screw around too much. Respect your folks, or you’re gonna get some heat, bitches.";
      } else if (age >= 20 && age < 30) {
        return "Yo, take it easy, man. Don’t lose your sh*t over every little thing. Party hard, work hard, but don’t go crazy online, alright? Balance it out or you’ll f*ck everything up, bitches.";
      } else if (age >= 30 && age < 40) {
        return "Listen, man, you’re deep in the game now. Sh*t’s real, but don’t let it break you. Keep hustlin’, but take a damn break. Don’t let stress screw you over, bitches.";
      } else if (age >= 40 && age < 60) {
        return "Alright, old-timer, you’ve been through it all. Don’t let that sh*t weigh you down. Have a drink, laugh it off, and don’t lose your damn edge. Keep it real and don’t let life’s bullsh*t drag you down, bitches.";
      } else if (age >= 60 && age < 80) {
        return "Yo, you’re a f*cking legend now. Time to chill and enjoy the ride. Don’t let anyone tell you you’re too old to have fun. Live it up, pass on some wisdom, and don’t let anyone’s crap get to you, bitches.";
      }
    } else if (tone === 'Negan') {
      if (age >= 0 && age < 10) {
       return "Well, well, look at you, kiddo! Enjoy the simple stuff like toys and candy while you can. Life’s a game, so make the most of it, but remember, even a little badass needs to mind their manners."
      } else if (age >= 10 && age < 20) {
        return "Alright, you’re in your rebellious phase. Don’t screw it up by being a little punk. Respect the rules, but don’t let anyone push you around. Stay sharp and remember, life’s got its ups and downs."
      } else if (age >= 20 && age < 30) {
        return "You’re in the prime of your life, so don’t waste it. Work hard, play hard, but don’t let anyone or anything mess with your head. Find your balance, and keep your cool under pressure."
      } else if (age >= 30 && age < 40) {
        return "Welcome to the real world, pal. It’s tough out there, but you’ve got the grit to handle it. Keep pushing, don’t get soft, and remember, you’re the one in control of your destiny."
      } else if (age >= 40 && age < 60) {
        return "Alright, old-timer, you’ve been through it all. Don’t let that sh*t weigh you down. Have a drink, laugh it off, and don’t lose your damn edge. Keep it real and don’t let life’s bullsh*t drag you down, bitches.";
      } else if (age >= 60 && age < 80) {
        return "You’ve made it through the trenches. Now, it’s time to sit back, relax, and enjoy the rewards. You’ve got stories to tell and wisdom to share, so make sure you pass that on."
      }
    }
    return "This is an undefined age range. Please enter a valid age.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = getMessage(age, tone);
    setMessage(message);
  };

  return (
    <div className="flex  justify-center bg-sky-400 h-screen items-center">
      <div className=" flex border w-96 p-5 bg-white rounded  items-center justify-center flex-col gap-4">
        <div className="flex flex-col gap-8 ">
          <div className="text-3xl font-bold">Age Bracket Wisdom</div>
          <form
            className="flex flex-col gap-4 items-center justify-center "
            onSubmit={handleSubmit}
          >
            <label className="text-lg">
              Enter your age:
              <input
                className="outline-none bg-slate-100 pl-2 ml-2  w-20 rounded"
                type="number"
                value={age}
                onChange={handleChange}
              />
            </label >
            <label className="text-lg">
              Select tone:
              <select className="rounded bg-slate-100 outline-none ml-2" value={tone} onChange={handleToneChange}>
                <option value="jackie">Jackie Shroff</option>
                <option value="jessie">Jesse Pinkman</option>
                <option value="batman">Batman</option>
                <option value="professor">The Professor</option>
                <option value="Negan">Negan</option>
              </select>
            </label>
            <button
              className="bg-black rounded text-white w-28 text-md "
              type="submit"
            >
              Get Wisdom
            </button>
          </form>
        </div>
        <div className=" rounded bg-slate-100 p-2 w-80 h-auto">
          {message && (
            <div className="message">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
