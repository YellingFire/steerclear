export default function determineEnv() {
    switch(window.location.origin) {
        case 'http://localhost:3000': return 'DEV';
        // case '<YOUR STAGING ENVIRONMENT HERE>': return 'STAGING';
        case 'https://fast-shelf-49291.herokuapp.com': return 'PROD';
        default: throw new Error('Your current environment is not configured in determineEnv.js');
    }
}