document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            slNo: 1,
            registrationNumber: "ABC123",
            vehicleID: "V123",
            type: "SUV",
            ownerName: "Hello",
            phoneNumber: "123-456-7890",
            email : "hello@gmail.com",
            brand : "Maruthi",
            model : "Suzuki",
            engaged : "Yes", 
            registrationDate : "10-06-2003"
        },
    ];
    const tableBody = document.querySelector(".data-table tbody");
    data.forEach((row) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${row.slNo}</td>
        <td>${row.registrationNumber}</td>
        <td>${row.vehicleID}</td>
        <td>${row.type}</td>
        <td>${row.ownerName}</td>
        <td>${row.phoneNumber}</td>
        <td>${row.email}</td>
        <td>${row.brand}</td>
        <td>${row.model}</td>
        <td>${row.engaged}</td>
        <td>${row.registrationDate}</td>
        <td>
            <select>
                <option value="pending">Pending</option>
                <option value="inspected">Inspected</option>
                <option value="client-approved">Client Approved</option>
                <option value="rejected">Rejected</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </td>
        <td>
            <select>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="idle">Idle</option>
                <option value="temporarily-blocked">Temporarily Blocked</option>
                <option value="permanently-locked">Permanently Locked</option>
            </select>
        </td>
        <td>
            <div class="button-container">
                <button class="modify-button"><img src="image/pen.png"></button>
                <button class="delete-button"><img src="image/bin.png"></button>
            </div>
        </td>
    `;
    tableBody.appendChild(newRow);
});

});
document.getElementById("searchButton").addEventListener("click", function () {
    const searchText = document.getElementById("searchInput").value;
    const inspectionStatus = document.getElementById("inspectionStatus").value;
    const vehicleState = document.getElementById("vehicleState").value;
    const dateRange = document.getElementById("dateRange").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const engaged = document.getElementById("engaged").value;
});

const data = {
    totalVehicles: 500,
    activeVehicles: 250,
    inactiveVehicles: 100,
    idleVehicles: 50,
    approvalPending: 30,
    approvalRejected: 20,
};
function updateBoxContent() {
    document.getElementById('totalVehicles').textContent = data.totalVehicles;
    document.getElementById('activeVehicles').textContent = data.activeVehicles;
    document.getElementById('inactiveVehicles').textContent = data.inactiveVehicles;
    document.getElementById('idleVehicles').textContent = data.idleVehicles;
    document.getElementById('approvalPending').textContent = data.approvalPending;
    document.getElementById('approvalRejected').textContent = data.approvalRejected;
}
updateBoxContent();
