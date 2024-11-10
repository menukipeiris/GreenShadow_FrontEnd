import vehicleModel  from "../model/vehicleModel.js";
import { vehicles} from "../db/db.js";

var recordIndex;

function loadTable(){
    $('#vehicle-tbl-tbody').empty();

    vehicles.map((item, index) => {
        let record = `<tr>
              <td class="vehicle-code-value">${item.vehicleCode}</td>
              <td class="vehicle-plateNu-value">${item.plateNu}</td>
              <td class="vehicle-category-value">${item.category}</td>
              <td class="vehicle-fuelType-value">${item.fuelType}</td>
              <td class="vehicle-status-value">${item.status}</td>
              <td class="vehicle-staff-value">${item.staff}</td>
              <td class="vehicle-remarks-value">${item.remarks}</td>
             
            </tr>`;

        $("#vehicle-tbl-tbody").append(record);
    });
}

//save button
$('#vehicle-submit').on('click', () => {
    var vehicleCode=$('#id').val();
    var plateNu=$('#name').val();
    var category=$('#type').val();
    var fuelType=$('#typeFuel').val();
    var status=$('#vStatus').val();
    var staff=$('#assignedStaff').val();
    var remarks=$('#vRemarks').val();

    let vehicle=new vehicleModel(vehicleCode,plateNu,category,fuelType,status,staff,remarks)

    vehicles.push(vehicle);

    loadTable();
    $("#vehicle-submit").click();
});