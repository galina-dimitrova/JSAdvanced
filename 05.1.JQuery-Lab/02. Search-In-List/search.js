function search() {

   let search = $('#searchText').val()
   let items = $(`#towns li:contains('${search}')`);
   items.css('font-weight', 'bold');   

   $('#result').text(`${items.length} matches found.`);
}