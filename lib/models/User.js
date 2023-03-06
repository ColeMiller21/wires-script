const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

//if not exists than create a table but if exists use schema
module.exports = models.User || model("User", UserSchema);
