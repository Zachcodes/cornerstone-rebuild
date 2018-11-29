select p.*, pi.image_link from projects p
join project_images pi 
on p.id = pi.project_id;