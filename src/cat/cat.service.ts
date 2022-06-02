import { Injectable } from '@nestjs/common';
import { KafkaTopicEnum } from 'src/kafka/kafka.enum';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class CatService {
  constructor(private readonly producerService: ProducerService) {}
// https://kafka.js.org/docs/producing
  async getHello() {
    this.producerService.sendKafkaMessage(KafkaTopicEnum.TUYENNX, [
      {
        // key: '0',
        value: JSON.stringify(
          {
            name: 'KEY_NAME',
            value: [
              {
                value: 'key11111',
              },
            ],
          }
        )
      },
    ]);

    return 'Hello World!';
  }

  async getHello1() {
    this.producerService.sendKafkaMessage(KafkaTopicEnum.TUYENNX1, [
      {
        // key: 'TUYENNX1',
        value: {
          name: 'KEY_NAME111',
          value: JSON.stringify([
            {
              value: 'key22222',
            },
          ]),
        }
      },
    ]);

    return 'Hello World!1';
  }
}
