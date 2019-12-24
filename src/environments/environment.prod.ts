import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8081/auth',
    clientId: 'iot-app',
    realm: 'iot',
    credentials: { secret: '4039c7fa-e652-4fd3-98d3-10f900921275' },
};

export const environment = {
    production: true,
    hmr       : false,
    keycloakConfig,
};
