export const genderList = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
export const requestStatusList = (status) => {
    switch (status) {
        case "Requested": return ['Requested', 'Pending', 'Process', 'Ready for Create', 'Completed', 'Cancelled']
        case "Pending": return ['Pending', 'Process', 'Ready for Create', 'Completed', 'Cancelled']
        case "Process": return ['Process', 'Ready for Create', 'Completed', 'Cancelled']
        case "Ready for Create": return ['Ready for Create', 'Completed', 'Cancelled']
        case "Completed": return ['Completed']
        case "Cancelled": return ['Cancelled']
    }
} 