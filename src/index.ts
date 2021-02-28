import {GithubApiService} from './GithubApiService';
import * as  _ from 'lodash';
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('ehtiramabdullayev', (user: User) => {
    svc.getRepos('ehtiramabdullayev', (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size]);
        let filteredRepos = _.take(sortedRepos, 2);

        user.repos=filteredRepos;
        console.log(user);
    } );

} );

