import { Body, Controller, Post, Get, Param, Query, Delete, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface'
import { ValidacaoParametrosPipe } from '../common/pipes/validacao-parametros.pipe';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {

  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(
    @Body() criarJogadorDto: CriarJogadorDto): Promise<Jogador> {
    return this.jogadoresService.criarJogador(criarJogadorDto)
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Body() atualizarJogadorDto: AtualizarJogadorDto,
    @Param('_id', ValidacaoParametrosPipe) _id: string): Promise<void> {
    await this.jogadoresService.atualizarJogador(_id, atualizarJogadorDto)
  }

  @Get()
  async consultarJogadores(): Promise<Jogador[] | Jogador> {
    return this.jogadoresService.consultarTodosJogadores()
  }

  @Get('/:_id')
  async consultarJogadorPeloId(
    @Param('_id', ValidacaoParametrosPipe) _id: string): Promise<Jogador> {
      return this.jogadoresService.consultarJogadorPeloId(_id)
  }

  @Delete('/:_id')
  async deletarJogador(
    @Query('_id', ValidacaoParametrosPipe) _id: string): Promise<void> {
      this.jogadoresService.deletarJogador(_id)
  }
}
