export interface Course {
  id?: string;
  name: string;
  lecturer: { id: string; name: string };
  instituteId?: string;
}
