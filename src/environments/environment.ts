import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8081/auth',
    clientId: 'iot-app',
    realm: 'iot',
    credentials: { secret: '33c516fb-3520-4e2a-9b38-7b5241565d47' },
};

export const environment = {
    production: false,
    hmr       : false,
    keycloakConfig,
};
