
interface Database {
  save(content: any): void;
}

interface Board {
  save(): void;
}

class GenericBoard implements Board {
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}

class ChessBoard extends GenericBoard {
  constructor(
    public houses: string[],
    protected database: Database,
    // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    super(
      houses,
      database,
    );
    // Implementação específica de um tabuleiro de xadrez
  }
}
