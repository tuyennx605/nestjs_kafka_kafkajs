import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopic,
  Kafka,
} from 'kafkajs';
import { getKafkaConfig } from './kafka-system.helper';

@Injectable()
export class ConsumerSystemService implements OnApplicationShutdown {
  constructor(private configService: ConfigService) {}
  private readonly kafka = new Kafka(getKafkaConfig(this.configService) as any);
  private readonly consumers: Consumer[] = [];

  async consume(topics: ConsumerSubscribeTopic[], config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({
      groupId: this.configService.get('kafka.groupId'),
    });
    await consumer.connect();
    for (let i = 0; i < topics.length; i++) {
      await consumer.subscribe(topics[i]);
    }

    await consumer.run(config);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
