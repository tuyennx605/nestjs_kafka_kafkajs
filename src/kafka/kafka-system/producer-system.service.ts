import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { getKafkaConfig } from './kafka-system.helper';

@Injectable()
export class ProducerSystemService
  implements OnModuleInit, OnApplicationShutdown
{
  constructor(private configService: ConfigService) {}

  private readonly kafka = new Kafka(getKafkaConfig(this.configService) as any);
  private readonly producer: Producer = this.kafka.producer({
    allowAutoTopicCreation: false, // co tu dong tao topic ko
  });

  async onModuleInit() {
    await this.producer.connect();
  }

  async produce(record: ProducerRecord) {
    await this.producer.send(record);
  }

  async onApplicationShutdown() {
    await this.producer.disconnect();
  }
}
