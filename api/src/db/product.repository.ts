import {Injectable} from '@nestjs/common';
import {PrismaService} from '../helper/prisma.service';
import {ProductDto, ProductsDto} from '../types/db.dto';
import {ErrorDto} from '../types/error.dto';
import {Product, ProductStatus} from '@prisma/client';

@Injectable()
export class ProductRepository{
  constructor(private readonly prisma: PrismaService) {
  }

  async getAll() : Promise<[ProductsDto, ErrorDto]> {
      try {
          const products = await this.prisma.product.findMany({
              orderBy: {
                  salesOrder: 'desc'
              },
              include: {
                  billedTo: true,
                  shippedTo: true
              }
          });

            return [products, null];
      }catch(error) {
          return [null, {message: "Internal Server Error", status: 500}]
      }
  }

  async get(identifier: string) : Promise<[ProductDto, ErrorDto]> {
      try {
          const product = await this.prisma.product.findUnique({
              where: {
                  id: identifier
              },
              include: {
                  billedTo: true,
                  shippedTo: true
              }
          });

          if (!product) {
              return [null, {message: "Product not found", status: 404}];
          }

          return [product, null];

      } catch(error) {
          return [null, {message: "Internal Server Error", status: 500}]
      }
  }

  async searchByStatus(status: ProductStatus) : Promise<[ProductsDto, ErrorDto]> {
      try {
          const products = await this.prisma.product.findMany({
              where: {
                  status: status
              },
              include: {
                  billedTo: true,
                  shippedTo: true
              }
          });

          return [products, null];
      } catch(error) {
          return [null, {message: "Internal Server Error", status: 500}]
      }
  }

  async create(name: string, description: string, po: string, shopvox: string, salesOrder: string, qty: number, shipBy: Date, billedTo: string, shippedTo: string,) : Promise<[ProductDto, ErrorDto]> {
      try {
          const product = await this.prisma.product.create({
              data : {
                  name,
                  description,
                  po,
                  shopvox,
                  salesOrder,
                  qty,
                  shipBy,
                  billedTo: {
                      connect: {
                          id: billedTo
                      }
                  },
                  shippedTo: {
                      connect: {
                          id: shippedTo
                      }
                  }
              },
              include: {
                  billedTo: true,
                  shippedTo: true
              }
          });

          return [product, null];
      }catch(error) {
            return [null, {message: "Internal Server Error", status: 500}]
      }
  }

  async createManual(name: string, description: string, po: string, shopvox: string, salesOrder: string, qty: number, shipBy: Date, billedTo: string, shippedTo: string,) : Promise<[ProductDto, ErrorDto]> {
      try {
          const product = await this.prisma.product.create({
              data : {
                  name,
                  description,
                  po,
                  shopvox,
                  salesOrder,
                  qty,
                  shipBy,
                  billedToAddress: billedTo,
                    shippedToAddress: shippedTo
              },
              include: {
                  billedTo: true,
                  shippedTo: true
              }
          });

          return [product, null];
      }catch(error) {
          return [null, {message: "Internal Server Error", status: 500}]
      }
  }

  async update(identifier:string,  data: Partial<Product>) : Promise<ErrorDto> {
        try {
            await this.prisma.product.update({
                where: {
                    id: identifier
                },
                data: data
            });
            return null;
        }catch(error) {
            return {message: "Internal Server Error", status: 500}
        }
    }

    async delete(identifier: string) : Promise<ErrorDto> {
        try {
            await this.prisma.product.delete({
                where: {
                    id: identifier
                }
            });
            return null;
        }catch(error) {
            return {message: "Internal Server Error", status: 500}
        }
    }
}