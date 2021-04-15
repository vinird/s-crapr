// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const serverURL = 'http://localhost:3000/';

export const environment = {
  production: false,
  URLS: {
    auth: `${serverURL}auth/`,
    authLogin: `${serverURL}auth/login`,
    authRegister: `${serverURL}auth/register`,
    jobResult: `${serverURL}job-result/`,
    scrappers: `${serverURL}scrappers/`,
    scrappersReduced: `${serverURL}scrappers/reduced`,
    scrappersRun: `${serverURL}scrappers/run`,
    jobs: `${serverURL}jobs/`,
    jobsResult: `${serverURL}job-result/`,
    jobsResultByJob: `${serverURL}job-result/job/`,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
