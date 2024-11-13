import vehicleModel from "../model/vehicleModel.js";
import {vehicles} from "../db/db.js";

var recordIndex;

// Function to load and render the vehicle table
function loadTable(){
    $('#vehicle-tbl-tbody').empty();

    vehicles.map((item, index) => {
        let record = `<tr>
              <td class="vehicle-code-value">${item.vehicleCode}</td>
                <td class="vehicle-plate-value">${item.plateNu}</td>
                <td class="vehicle-category-value">${item.category}</td>
                <td class="vehicle-fuel-value">${item.fuelType}</td>
                <td class="vehicle-status-value">${item.status}</td>
                <td class="vehicle-staff-value">${item.staff}</td>
                <td class="vehicle-remarks-value">${item.remarks}</td>
            </tr>`;

        $("#vehicle-tbl-tbody").append(record);
    });
}

// Save button functionality
$('#vehicle-submit').on('click', () => {
    var vehicleCode = $('#code').val();
    var plateNumber = $('#nuPlate').val();
    var category = $('#vehCategory').val();
    var fuelType = $('#typeFuel').val();
    var status = $('#vStatus').val();
    var assignedStaff = $('#assignedStaff').val();
    var remarks = $('#vRemarks').val();

    let vehicle = new vehicleModel(vehicleCode, plateNumber, category, fuelType, status, assignedStaff, remarks);

    vehicles.push(vehicle);

    loadTable();
    $("#vehicle-reset").click();
});

// Update button functionality
$("#vehicle-update").on('click', () => {
    var vehicleCode = $('#vehicleCode').val();
    var plateNumber = $('#plateNu').val();
    var category = $('#category').val();
    var fuelType = $('#fuelType').val();
    var status = $('#status').val();
    var assignedStaff = $('#asStaff').val();
    var remarks = $('#remarks').val();

    let vehicleObj = vehicles[recordIndex];
    vehicleObj.vehicleCode = vehicleCode;
    vehicleObj.plateNumber = plateNumber;
    vehicleObj.category = category;
    vehicleObj.fuelType = fuelType;
    vehicleObj.status = status;
    vehicleObj.assignedStaff = assignedStaff;
    vehicleObj.remarks = remarks;

    loadTable();
    $("#vehicle-reset").click();
});

// Delete button functionality
$('#vehicle-delete').on('click', () => {
    vehicles.splice(recordIndex, 1);
    loadTable();
    $("#vehicle-reset").click();
});

// Row selection functionality to fill the form fields for update/delete
$("#vehicle-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let code = $(this).find(".vehicle-code-value").text();
    let plate = $(this).find(".vehicle-plate-value").text();
    let category = $(this).find(".vehicle-category-value").text();
    let fuel = $(this).find(".vehicle-fuel-value").text();
    let status = $(this).find(".vehicle-status-value").text();
    let staff = $(this).find(".vehicle-staff-value").text();
    let remarks = $(this).find(".vehicle-remarks-value").text();

    $("#vehicleCode").val(code);
    $("#plateNu").val(plate);
    $("#category").val(category);
    $("#fuelType").val(fuel);
    $("#status").val(status);
    $("#asStaff").val(staff);
    $("#remarks").val(remarks);
});
