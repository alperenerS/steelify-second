import { Module } from '@nestjs/common';
import { PinService } from './pin.service';
import { PinController } from './pin.controller';
import { PinCleanupService } from './pinClean.service';
import { ScheduleModule } from '@nestjs/schedule';
import { pinProvider } from './pin.provider';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [PinService, PinCleanupService, ...pinProvider],
  controllers: [PinController],
  exports: [PinService],
})
export class PinModule {}
