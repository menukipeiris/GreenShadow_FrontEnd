import equipmentModel from "../model/equipmentModel.js";
import {equipments} from "../db/db.js";

var recordIndex;


function loadTable(){
    $('#equipment-tbl-tbody').empty();

    equipments.map((item, index) => {
        let record = `<tr>
              <td class="equipment-id-value">${item.equipId}</td>
                <td class="equipment-name-value">${item.equipName}</td>
                <td class="equipment-type-value">${item.type}</td>
                <td class="equipment-status-value">${item.status}</td>
                <td class="equipment-staff-value">${item.staff}</td>
                <td class="equipment-field-value">${item.field}</td>
            </tr>`;

        $("#equipment-tbl-tbody").append(record);
    });
}

//save button
$('#equipment-submit').on('click', () => {
     var equipmentId=$('#id').val();
     var equipmentName=$('#name').val();
     var equipmentType=$('#type').val();
     var equipmentStatus=$('#equiStatus').val();
     var equipmentStaff=$('#assignedStaff').val();
     var equipmentField=$('#field').val();

     let equipment=new equipmentModel(equipmentId,equipmentName,equipmentType,equipmentStatus,equipmentStaff,equipmentField);

     equipments.push(equipment);

     loadTable();
     $("#equipment-reset").click();
});

//update button
$("#equipment-update").on('click', () => {
    var equipmId=$('#equipId').val();
    var equipmName=$('#equipName').val();
    var equipmType=$('#equipType').val();
    var equipmStatus=$('#equipStatus').val();
    var equipmStaff=$('#staff').val();
    var equipmField=$('#equiField').val();

    let equipObj=equipments[recordIndex];
    equipObj.equipId=equipmId;
    equipObj.equipName=equipmName;
    equipObj.type=equipmType;
    equipObj.status=equipmStatus;
    equipObj.staff=equipmStaff;
    equipObj.field=equipmField;

    loadTable();
    $("#equipment-reset").click()
});

$("#equipment-reset1").click()

//delete button
$('#equipment-delete').on('click', () => {
    equipments.splice(recordIndex,1);
    loadTable();
    $("#equipment-reset").click();
});

$("#equipment-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let id=$(this).find(".equipment-id-value").text();
    let name=$(this).find(".equipment-name-value").text();
    let type=$(this).find(".equipment-type-value").text();
    let status=$(this).find(".equipment-status-value").text();
    let staff=$(this).find(".equipment-staff-value").text();
    let field=$(this).find(".equipment-field-value").text();

    $("#equipId").val(id)
    $("#equipName").val(name)
    $("#equipType").val(type)
    $("#equipStatus").val(status)
    $("#staff").val(staff)
    $("#equiField").val(field)

})


