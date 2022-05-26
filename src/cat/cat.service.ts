import { Injectable } from '@nestjs/common';
import { KafkaTopicEnum } from 'src/kafka/kafka.enum';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class CatService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    this.producerService.sendKafkaMessage(KafkaTopicEnum.TUYENNX, [
      {
        key: 'TUYENNX',
        value: JSON.stringify([
          {
            value: 'Hello World11',
          },
        ]),
      },
    ]);

    return 'Hello World!';
  }

  async getHello1() {
    this.producerService.sendKafkaMessage(KafkaTopicEnum.TUYENNX1, [
      {
        key: 'TUYENNX1',
        value: JSON.stringify([
          {
            value: 'Hello World11',
          },
        ]),
      },
    ]);

    return 'Hello World!1';
  }
}
