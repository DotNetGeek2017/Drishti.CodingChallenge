import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  private storage: any;
  constructor() {
    this.storage = localStorage;
  }

  /**
   * Retrieves a key's value from the underlying storage.
   *
   * @param {string} key - Key under which the value is stored.
   * @return {any} - The object value.
   */
  public retrieve(key: string): any {
    let item = this.storage.getItem(key);

    if (item && item !== "undefined") {
      return JSON.parse(this.storage.getItem(key));
    }

    return;
  }

  /**
   * Stores a key value pair into the underlying storage.
   *
   * @param {string} key - Key to store
   * @param {any} - Value to store
   */
  public store(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   * Deletes a key from storage
   *
   * @param {string} key - Key to store
   */
  public delete(key: string) {
    this.storage.removeItem(key);
  }
  public get UserName(): string {
    return this.retrieve("UserName");
  }
  public get ADUserName(): string {
    return this.retrieve("ADUserName");
  }
  public get Email(): string {
    return this.retrieve("Email");
  }
  public get IDToken(): string {
    return this.retrieve("id_token");
  }
  public get id_token_data(): string {
    return this.retrieve("id_token_Data");
  }
}
