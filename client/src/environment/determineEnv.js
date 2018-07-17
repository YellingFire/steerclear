export default function determineEnv() {
    switch(window.location.origin) {
        case 'http://localhost:3000': return 'DEV';
        case '<YOUR STAGING ENVIRONMENT HERE>': return 'STAGING';
        case '<YOUR PRODUCTION ENVIRONMENT HERE>': return 'PROD';
        default: throw new Error('Your current environment is not configured in determineEnv.js');
    }
}