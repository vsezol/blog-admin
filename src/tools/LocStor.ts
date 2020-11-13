export default class LocStor {
  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static setItems(entries: [string, any][]) {
    entries.forEach(([key, value]) => LocStor.setItem(key, value));
  }

  static getItem(key: string) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item);
  }

  static getItems(keys: string[]) {
    return keys.map(key => LocStor.getItem(key));
  }
}