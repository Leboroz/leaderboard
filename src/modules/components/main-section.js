import leaderBoard from './leaderboard';
import form from './form';

const leaderBoardContainer = document.createElement('section');
leaderBoardContainer.className = 'leader-board-container';

leaderBoardContainer.append(leaderBoard, form);

export default leaderBoardContainer;
