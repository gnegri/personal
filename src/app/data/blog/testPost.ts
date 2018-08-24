import { BlogPost } from '../../classes/BlogPost';

import * as mdStr from './testPost.html';

export const testPost: BlogPost = {
    date: '1970.1.1',
    title: 'This is the test post template.',
    body: mdStr
};
