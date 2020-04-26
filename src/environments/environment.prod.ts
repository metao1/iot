import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8081/auth',
    clientId: 'iot-app',
    realm: 'iot',
    credentials: { secret: '4e097db6-67db-465c-8533-61c5479ec0f8' },
};

export const environment = {
    production: true,
    hmr       : false,
    keycloakConfig,
};
