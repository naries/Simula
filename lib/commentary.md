# Commentary

All files associated with commentary is included in the following files:

```
lib/engines/CommentarySelector.js
lib/Commentary.js
```
### Possible commentary

```lib/Commentary.js``` include all possible commentary the simulator has. They are usually combined with a player or an action before being displayed on the screen.

There are commentaries for when
- Football goes wide of the post,
- The ball is thrown in,
- A goal is scored,
- Corner is played,
- Ball goes over the bar,
- Ball bounces off the post,
- A keeper saves and 
- the match is ended.

### Commentary selection

```lib/engines/CommentarySelector.js``` include functions to pick suitable commentary for an action.

### Improvements

More functions can be created to allow for more commentaries in the app. Possible add
- offside commentary
- - Add audio files for each commentary.
