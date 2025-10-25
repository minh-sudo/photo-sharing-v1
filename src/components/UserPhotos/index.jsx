import React from "react";
import {Card,CardContent, Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models"
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const user = models.userModel(userId);
    const photos = models.photoOfUserModel(userId);
    
    if (!photos || photos.length===0){
      return (
        <Typography variant="h5">
          Không lấy được ảnh của người dùng {user.first_name}
        </Typography>
      )
    }
    else return (
      <div className="photo-container">
        <Typography variant="h6"
                    sx={{
                    textAlign: "center",     
                    fontWeight: "bold",      
        }}>
          Ảnh của {user.first_name} {user.last_name}
        </Typography>
        {photos.map((photo) => (
          <Card key={photo._id} className="photo-card">
           <CardContent>
              <img
                src={`../images/${photo.file_name}`}
                alt="userPhoto"
                style={{ width: "50%", borderRadius: "10px" }}
              />
              <Typography>
                Ngày đăng: {photo.date_time}
              </Typography>
              {photo.comments && photo.comments.length >0 ? (
                photo.comments.map((c)=>(
                  <Typography className="comment-text">
                 <Link to={`/users/${c.user._id}`}>
                  {c.user.first_name} {c.user.last_name}
                 </Link>:{c.comment} ({new Date(c.date_time).toLocaleString()}
                )
                  </Typography>
                ))):(
                  <Typography>
                    Không có bình luận nào
                  </Typography>
                )}
            </CardContent>
          </Card>
        ))}
      </div>   
    );
}

export default UserPhotos;
