import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { JogadorSchema } from './interfaces/jogador.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'jogador', schema: JogadorSchema}])],
  controllers: [JogadoresController],
  providers: [JogadoresService],
  exports: [JogadoresService]
})
export class JogadoresModule {}
