import React from "react";

export default function test() {
  return (
    <div>
      <Modal open={isModalOpen} onCancel={handleCancel} footer="">
        <h1 className="text-xl font-bold text-center">Update Profile</h1>
        <div className="w-full ">
          <FFForm defaultValues={defaultValues} onSubmit={onSubmit}>
            <div className="py-3">
              <FFInput label="Name" name="name" size="sm" type="text" />
            </div>
            <div className="py-3">
              <FFInput label="Email" name="email" size="sm" type="email" />
            </div>
            <div className="py-3">
              <FFInput label="Phone" name="phone" size="sm" type="number" />
            </div>
            <div className="py-3">
              <FFInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>
            <div className="py-3">
              <FFInputFile label="Profile Photo" name="photo" size="sm" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Update Profile
            </Button>
          </FFForm>
        </div>
      </Modal>
    </div>
  );
}
