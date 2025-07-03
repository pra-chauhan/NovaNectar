export const exportToCSV = (data, filename = "employees.csv") => {
    if (!data || !data.length) {
        alert("No employee data to export.");
        return;
    }

    const csvHeader = Object.keys(data[0]).join(",") + "\n";
    const csvRows = data.map(row =>
        Object.values(row)
            .map(value => `"${String(value).replace(/"/g, '""')}"`)
            .join(",")
    );
    const csvString = csvHeader + csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
