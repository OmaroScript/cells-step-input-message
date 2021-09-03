const mockList = [{
  "id": "example2",
  "text": "File name",
  "icon": "coronita:pdf",
  "subText": "230kb",
  "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
},
{
  "id": "example3",
  "text": "File name",
  "icon": "coronita:pdf",
  "subText": "230kb",
  "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
}]

const mockClick = {
  list: [{
    "id": "example2",
    "text": "File name",
    "icon": "coronita:pdf",
    "subText": "230kb",
    "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
  },
  {
    "id": "example3",
    "text": "File name",
    "icon": "coronita:pdf",
    "subText": "230kb",
    "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
  }],
  action: 'cells-list-file-item-clicked'
}

const mockEdit = {
  list: [{
    "id": "exampleEdit",
    "text": "File name",
    "icon": "coronita:pdf",
    "subText": "230kb",
    "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
  }],
  action: 'cells-list-file-edit'
}

const mockDelete = {
  list: [{
    "id": "exampleDelete",
    "text": "File name",
    "icon": "coronita:pdf",
    "subText": "230kb",
    "message": {"type":"info", "icon":"coronita:info", "text":"Helpful text that sits below the field", "iconSize": "16"}
  }],
  action: 'cells-list-file-delete'
}