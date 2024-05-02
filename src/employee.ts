export interface Employee {
  id: string;
  name: string;
  division: string;
}

export interface Manager extends Employee {
  // jadi object di dalam Employee menggunakan 'extends' masuk ke interface Manager
  //   + object tambahan di interface Manager
  numberOfEmployees: number;
}
