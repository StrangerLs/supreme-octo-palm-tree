const Post = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)