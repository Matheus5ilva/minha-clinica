export class StringUtil {
  /**
   * Remove caracteres especiais de uma string
   * @param texto Texto a ser tratado
   * @returns Texto sem caracteres especiais
   */
  static removeSpecialCharacters(text: string): string {
    return text.replace(/[^a-zA-Z0-9]/g, '');
  }

  /**
   * Remove pontuações de uma string (.,!?;:)
   * @param texto Texto a ser tratado
   * @returns Texto sem pontuações
   */
  static removePunctuation(text: string): string {
    return text.replace(/[.,!?;:]/g, '');
  }

  /**
   * Remove espaços em branco de uma string
   * @param texto Texto a ser tratado
   * @returns Texto sem espaços
   */
  static removeWhitespace(text: string): string {
    return text.replace(/\s/g, '');
  }

  /**
   * Formata um CPF (adiciona pontos e traço)
   * @param cpf CPF sem formatação
   * @returns CPF formatado (xxx.xxx.xxx-xx)
   */
  static formatCPF(cpf: string): string {
    const cleanCpf = this.removeSpecialCharacters(cpf);
    return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  /**
   * Formata um telefone (adiciona parênteses e hífen)
   * @param telefone Telefone sem formatação
   * @returns Telefone formatado ((xx) xxxxx-xxxx)
   */
  static formatPhone(phone: string): string {
    const cleanPhone = this.removeSpecialCharacters(phone);
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  /**
   * Capitaliza a primeira letra de cada palavra em uma string
   * @param texto Texto a ser capitalizado
   * @returns Texto com primeiras letras maiúsculas
   */
  static capitalizeWords(text: string): string {
    return text
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (letter) => letter.toUpperCase());
  }

  /**
   * Remove acentos de uma string
   * @param texto Texto a ser tratado
   * @returns Texto sem acentos
   */
  static removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Remove formatação do CNPJ, deixando apenas números
   * @param cnpj CNPJ com ou sem formatação
   * @returns CNPJ apenas com números
   */
  static cleanCNPJ(cnpj: string): string {
    return cnpj.replace(/[^\d]/g, '');
  }

  /**
   * Formata um CNPJ (adiciona pontos, barra e traço)
   * @param cnpj CNPJ sem formatação
   * @returns CNPJ formatado (xx.xxx.xxx/xxxx-xx)
   */
  static formatCNPJ(cnpj: string): string {
    const cleanCnpj = this.cleanCNPJ(cnpj);
    return cleanCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  }
}
