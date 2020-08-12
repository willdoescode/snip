import ShortUniqueId from 'short-unique-id';

class Hash {
  uid: ShortUniqueId;

  sequential: boolean;

  constructor(opts: Record<string, boolean> = {}) {
    this.uid = new ShortUniqueId();
    this.sequential = opts.sequential || false;
  }

  generate(): string {
    return this.sequential ? this.uid.seq() : this.uid();
  }
}

export default Hash;
