import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  blogId: number;

  blogContent = "placeholder";

  ngOnInit(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));

    this.getData(this.blogId);
  }

  getData(id: number) {
    switch (id) {
      case 1:
        this.blogsService.getBlog(id).subscribe(data => {
          this.blogContent = data.toString();
        });
        break;

      default:
        break;
    }
    
  }
}
