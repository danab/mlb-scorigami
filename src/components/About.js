import React from 'react';

const About = () => (
  <>
    <h2>Frequently Asked Questions</h2>
    <h4>Why did you stop at 25? I want to see the whole data set!</h4>
    <p>
      Games in which a team scores over 25 are incredibly sparse. There are
      215,737 games in the Lahman database and only 78 (~0.04%) of those games
      did one team score more than 25 runs. In recent years, you could probably
      make an argument for cutting it off at 20.
    </p>
    <h4>Why are there ties?</h4>
    <p>
      In the past ties occurred more frequently in baseball, particularly before
      all stadiums had lights (and therefore games would be called on account of
      darkness). Tie games still occasionally occur, generally because two teams
      begin a game, it&apos;s postponed as a tie, and then the two teams never
      make the games up because it is irrelevant to the final standings.
    </p>
    <h4>What is the 25-25 game??</h4>
    <p>
      Baseball in the 1870s was apparently wild. Check out the{' '}
      <a href="https://www.retrosheet.org/boxesetc/1871/B06280TRO1871.htm">
        box score
      </a>{' '}
      for the 49-33 game played by the Philadelphia Athletics and the Troy
      Haymakers in 1871.
    </p>
    <h4>Why does the scale go from 1 to 7,105? Or 1 to 109?</h4>
    <p>
      When viewing a range of seasons the most popular game result is 2-3 (home
      team wins) which has occurred 7,105 times. For a single season the most
      popular game result was 3-4, which occurred 109 times in 2013.
    </p>
    <h2 style={{ marginTop: '40px' }}>About</h2>
    <p>
      This project was created by{' '}
      <a href="https://danaben.net/t">Dana Bennett</a> in late 2018. It was
      highly influenced by &ldquo;
      <a href="https://www.sbnation.com/2016/12/7/13856392/chart-party-scorigami">
        Scorigami
      </a>
      &rdquo;, a Jon Bois invention. I also later found a similar{' '}
      <a href="https://twitter.com/MLBRandomStats/status/1031692992757858308">
        chart
      </a>{' '}
      created by Jeremy Frank of{' '}
      <a href="https://twitter.com/MLBRandomStats">@MLBRandomStats</a>.
    </p>
  </>
);

export default About;
