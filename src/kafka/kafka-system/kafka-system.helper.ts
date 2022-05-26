import { ConfigService } from '@nestjs/config';

export const getKafkaConfig = (configService: ConfigService) => {
  if (
    configService.get('kafka.ssl') === true &&
    configService.get('kafka.sasl.mechanism')
  ) {
    return {
      brokers: [configService.get('kafka.serverUrl')],
      clientId: configService.get('kafka.clientId'),
      sasl: {
        mechanism: 'plain',
        username: configService.get('kafka.sasl.username'),
        password: configService.get('kafka.sasl.password'),
      },
      ssl: configService.get('kafka.ssl'),
    };
  }
  return {
    brokers: [configService.get('kafka.serverUrl')],
    clientId: configService.get('kafka.clientId'),
  };
};
