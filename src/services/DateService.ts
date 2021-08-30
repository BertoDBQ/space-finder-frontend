import { Space } from '../model/Model';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: 'Dubuque',
      name: 'Mustangs',
      spaceId: 'Hempstead',
    });
    result.push({
      location: 'Monticello',
      name: 'Panthers',
      spaceId: 'Monti',
    });
    result.push({
      location: 'Cedar Rapids',
      name: 'Lions',
      spaceId: 'Linn Mar',
    });

    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    return spaceId === 'Hempstead' ? '5555' : undefined;
  }
}
