import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8081/auth',
    clientId: 'marketplace-app',
    realm: 'marketplace',
    credentials: { secret: '4039c7fa-e652-4fd3-98d3-10f900921275' },
};

export const environment = {
    production: false,
    hmr       : false,
    keycloakConfig,
};
