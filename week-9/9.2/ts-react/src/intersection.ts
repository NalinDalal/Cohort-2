type Employee2 = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TechLead = Employee & Manager;
type TechLead2 = {
    name: "harkirat",
    department: "asdasd"
};
