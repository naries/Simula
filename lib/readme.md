## Team Information

Every player is updated recently. Every Team is also updated accordingly. 
  Team form and player rating accurately (credits to fifaratings.com)

### Team Dominance

Team Dominance is calculated by finding the average for the attack, defence and midfield of that team.
So, a team A with attack of 83, defence of 82 and midfield of 90 will have a dominance of 85 multiplied by 100.
Add and subtract biases, you get 8480

The Teams then and dominance are:
  Arsenal, ***7933***
  Manchester United, ***8175***
  Chelsea, ***8166***
  Aston Villa, ***7966***
  Leicester, ***8033***
  Fulham, ***7433***
  West Bromwich Albion, ***7300*** 
  Liverpool, ***8533***
  Leeds United, ***7533***
  Wolverhampton Wanderers, ***7900***
  Sheffield United, ***7366***,
  Tottenham, ***8433***
  Everton, ***7966***
  Brighton and Hove Albion, ***7566***,
  Newcastle United, ***7633***
  Crystal Palace, ***7533***
  Burnley, ***7600***
  Manchester City, ***8500***
  Southampton, ***7700***
Teams are editable in **/lib/teams.js**

The more dominant a team is, the more the spell of possesion they have
The more the spell of possession the higher the chance of scoring goals.
That does not mean to say that the stronger team win.

The following is a sample of a player details in a team, the rating is picked directly from [FIFAratings](https://www.fifaratings.com/league/english-premier-league)

```
    {
        name: 'Martin Odegaard',
        shirtNumber: 11,
        position: 'AM',
        rating: 83,
        morale: 99
     }
 ```
